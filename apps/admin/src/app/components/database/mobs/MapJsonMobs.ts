import mobsRaw from './gm/mobsDb2.json';

interface InitialMob {
    name: string;
    categories?: string[];
    material: string;
    nbt: string;
    isPersistent: boolean;
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
export interface Mob {
    name: string;
    spawnEggMaterial: string;
    gamemaster: {
        spawnEgg: string;
        tags: string[];
        nbt: string;
        categories: string[];
    };
    spawnMechanics: {
        isPersistent: boolean;
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
    };
}
function getTags(nbt: string): string[] {
    const tagsName = 'Tags:';
    const tagsIndex = nbt.search(tagsName);
    if (tagsIndex < 0) return [];
    nbt = nbt.substring(tagsIndex + tagsName.length);
    const endOfTags = nbt.indexOf(']') + 1;
    nbt = nbt.substring(0, endOfTags);
    const tags: string[] = JSON.parse(nbt);
    return tags.sort((t1, t2) => t1.localeCompare(t2));
}
const mapped: Mob[] = [];
for (const mob of Object.values(mobsRaw) as InitialMob[]) {
    mapped.push({
        name: mob.name,
        spawnEggMaterial: mob.material,
        gamemaster: {
            nbt: mob.nbt,
            spawnEgg: `/give @p ${mob.material.toLowerCase()}${mob.nbt} 1`,
            tags: getTags(mob.nbt),
            categories: mob.categories ?? [],
        },
        spawnMechanics: {
            isPersistent: mob.isPersistent,
            despawnsAfterHours: mob.despawnsAfterHours,
            isSpawnWithLineOfSight: mob.isSpawnWithLineOfSight,
            highestYLevel: mob.highestYLevel,
            lowestYLevel: mob.lowestYLevel,
            timeToSpawn: mob.timeToSpawn,
            groups: mob.groups,
        },
    });
}
export function getMappedJsonMobs() {
    return mapped;
}
