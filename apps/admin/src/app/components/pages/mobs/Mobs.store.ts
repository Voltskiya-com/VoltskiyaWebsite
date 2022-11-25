import { useObservableMemo } from '@appleptr16/elemental';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, withEntities } from '@ngneat/elf-entities';
import { map } from 'rxjs';

import { sortOnKey } from '../../../util/sortOnKey';
import { getMappedJsonMobs, Mob } from '../../database/mobs/MapJsonMobs';

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
