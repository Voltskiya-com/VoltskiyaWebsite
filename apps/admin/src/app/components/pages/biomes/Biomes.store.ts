import { useObservableMemo } from '@appleptr16/elemental';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, withEntities } from '@ngneat/elf-entities';

import biomesRaw from '../../database/biomes/biomes.json';

const biomes: Biome[] = Object.entries(biomesRaw.biomesByName).map(
    ([name, biome]) => ({
        name,
        ...biome,
    })
);
export interface Biome {
    name: string;
    icon: {
        name: string;
        material: string;
    };
    mobs: Record<string, number>;
    spawnRate: number;
    dailyTemperatures: {
        MORNING: { degrees: number };
        MIDNIGHT: { degrees: number };
        NOON: { degrees: number };
        EVENING: { degrees: number };
    };
    windInfo: { kphMin: number; kphMax: number };
    biomeUid: number;
}
export const biomesStore = createStore(
    { name: 'Biomes' },
    withEntities<Biome, 'biomeUid'>({
        idKey: 'biomeUid',
        initialValue: biomes,
    })
);
export function useBiomeList(): Biome[] {
    return useObservableMemo(
        () => biomesStore.pipe(selectAllEntities()),
        [biomesStore],
        []
    );
}
