import { useObservableMemo } from '@app/util';
import { Optional } from '@app/util';
import { createStore, select } from '@ngneat/elf';
import {
    getEntity,
    selectAllEntities,
    selectEntity,
    withEntities,
} from '@ngneat/elf-entities';
import { useParams } from 'react-router-dom';
import { map } from 'rxjs';

import { sortOnKey } from '../../../../util/sortOnKey';
import { getMappedJsonMobs, Mob } from '../../../database/mobs/MapJsonMobs';

const mobsStore = createStore(
    { name: 'Mobs' },
    withEntities<Mob, 'name'>({
        idKey: 'name',
        initialValue: getMappedJsonMobs(),
    })
);
export interface MobListFilter {
    categories: string[];
    name: string;
}

export function useMobList(filter: MobListFilter): Mob[] {
    return useObservableMemo(
        () =>
            mobsStore.pipe(
                selectAllEntities(),
                map((mobs) => sortOnKey(mobs, 'name', filter.name))
            ),
        [mobsStore, filter],
        []
    );
}
export function useMob(name: string): Optional<Mob> {
    return useObservableMemo(
        () => mobsStore.pipe(selectEntity(name)),
        [mobsStore, name],
        mobsStore.query(getEntity(name))
    );
}
export function useMobCategories(): string[] {
    return useObservableMemo(
        () =>
            mobsStore.pipe(
                selectAllEntities(),
                map((mobs: Mob[]) => [
                    ...new Set(
                        mobs.map((mob: Mob) => mob.gamemaster.categories).flat()
                    ),
                ])
            ),
        [mobsStore],
        []
    );
}
export function useUrlMob(): Optional<Mob> {
    const mobName: Optional<string> = useParams()['mob_name'];
    if (!mobName) return undefined;
    return useMob(mobName);
}
