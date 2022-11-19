import { useObservableMemo } from '@appleptr16/elemental';
import { createStore } from '@ngneat/elf';
import {
    selectAllEntities,
    selectAllEntitiesApply,
    withEntities,
} from '@ngneat/elf-entities';
import fuzzysort from 'fuzzysort';
import { map } from 'rxjs';

import mobsRaw from '../../database/mobs/gm/mobsDb2.json';
import { biomesStore } from '../biomes/Biomes.store';

export interface Mob {
    name: string;
    material: string;
    nbt: string;
    isPersistant: boolean;
    despawnsAfterHours: number;
    isSpawnWithLineOfSight: boolean;
    highestYLevel: number;
    lowestYLevel: number;
    timeToSpawn: {
        isDay: boolean;
        isEvening: boolean;
        isNight: boolean;
        isMorning: boolean;
    };
    groups: number[];
}
export const mobsStore = createStore(
    { name: 'Mobs' },
    withEntities<Mob, 'name'>({
        idKey: 'name',
        initialValue: Object.values(mobsRaw) as any as Mob[],
    })
);
export interface MobListFilter {
    name: string;
}
export function useMobList(filter: MobListFilter): Mob[] {
    return useObservableMemo(
        () =>
            mobsStore.pipe(
                selectAllEntities(),
                map((mobs) =>
                    fuzzysort
                        .go(filter.name, mobs, { all: true, key: 'name' })
                        .map((result) => result.obj)
                )
            ),
        [mobsStore, filter],
        []
    );
}
export function useMobBiomes(): string[] {
    return useObservableMemo(
        () => mobsStore.pipe(selectAllEntitiesApply({})),
        [mobsStore, biomesStore],
        []
    );
}
export function useMobMap<Key extends keyof Mob>(key: Key): Mob[Key][] {
    const mobs = useObservableMemo(
        () =>
            mobsStore.pipe(
                selectAllEntitiesApply({
                    mapEntity: (mob: Mob) => mob[key],
                })
            ),
        [mobsStore, key],
        []
    );
    const mobSet: Set<Mob[Key]> = new Set();
    for (const mob of mobs) mobSet.add(mob);
    return [...mobSet.keys()];
}
