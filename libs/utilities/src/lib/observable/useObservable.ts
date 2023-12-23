import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

function isArrayShallowEqual(next: unknown, state: unknown): boolean {
    const nextIsArray = Array.isArray(next);
    const stateIsArray = Array.isArray(state);
    if (!nextIsArray || !stateIsArray) return false;

    const length = state.length;
    if (length !== next.length) return false;

    for (let i = 0; i < length; i++) {
        if (state[i] !== next[i]) return false;
    }
    return true;
}
function updateFn<T>(state: T, next: T, setState: (state: T) => void) {
    const isEq = state === next || isArrayShallowEqual(state, next);
    if (isEq) return;
    setState(next);
}
export function useObservable<T>(
    observable: Observable<T>,
    initialState: T | (() => T)
) {
    const [state, setState] = useState<T>(initialState);
    const update = (next: T) => updateFn(state, next, setState);
    useEffect(() => {
        const subscription = observable.subscribe(update);
        return () => subscription.unsubscribe();
    }, [observable, update]);

    return state;
}
