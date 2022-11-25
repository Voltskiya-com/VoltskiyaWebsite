import { SessionBase } from '@app/api';
import { useObservableMemo } from '@appleptr16/elemental';
import { Optional } from '@appleptr16/utilities';
import { createStore, setProp, withProps } from '@ngneat/elf';
import { useEffect, useState } from 'react';
import { map } from 'rxjs';

import { persistStore } from './Elf';

export type SelfUserState = {
    session: Optional<SessionBase>;
};
export const selfUserStore = createStore(
    { name: 'selfUser' },
    withProps<SelfUserState>({
        session: undefined,
    })
);
persistStore(selfUserStore);

export function getSessionToken() {
    return selfUserStore.getValue().session?.sessionToken;
}
export function useIsLoggedIn(): Optional<boolean> {
    const session: Optional<SessionBase> = useObservableMemo(
        () => selfUserStore.pipe(map((state) => state.session)),
        [selfUserStore],
        selfUserStore.getValue().session
    );
    const [s, refresh] = useState(null);
    useEffect(() => {
        if (!session) return;
        const expiration =
            new Date(session.expiration).getTime() - new Date().getTime();
        const timeout = setTimeout(() => refresh(null), expiration);
        return () => clearTimeout(timeout);
    });
    if (session === undefined) return false;
    if (session === null) return undefined;
    const isGoodSession = new Date(session.expiration) > new Date();
    if (!isGoodSession) selfUserStore.update(setProp('session', undefined));
    return isGoodSession;
}
