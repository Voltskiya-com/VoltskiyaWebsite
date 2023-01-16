import mobsRaw from './gm/mobs.json';

export interface MobRaw {
    name: string;
    gamemaster: {
        spawnEgg: string;
        nbt: string;
        categories: string[];
    };
    spawnerTags?: string[];
    extra?: {
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
    };
}
export interface Mob extends MobRaw {
    computed: {
        giveCommand: string;
        scoreboardTags: string[];
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
for (const mob of mobsRaw as MobRaw[]) {
    mapped.push({
        ...mob,
        computed: {
            giveCommand: `/give ${mob.gamemaster.spawnEgg}{${mob.gamemaster.nbt}} 64`,
            scoreboardTags: getTags(mob.gamemaster.nbt),
        },
    });
}
export function getMappedJsonMobs(): Mob[] {
    return mapped;
}
