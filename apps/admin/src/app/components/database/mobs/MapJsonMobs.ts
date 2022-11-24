import mobsRaw from './gm/mobsDb2.json';

interface InitialMob {
    name: string;
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
    gamemaster: {
        spawnEggMaterial: string;
        tags: string[];
        spawnEgg: string;
        nbt: string;
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
    return JSON.parse(nbt);
}
const mapped: Mob[] = [];
for (const mob of Object.values(mobsRaw)) {
    mapped.push({
        name: mob.name,
        gamemaster: {
            spawnEggMaterial: mob.material,
            nbt: mob.nbt,
            spawnEgg: `/give @p ${mob.material.toLowerCase()}${mob.nbt} 1`,
            tags: getTags(mob.nbt),
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
