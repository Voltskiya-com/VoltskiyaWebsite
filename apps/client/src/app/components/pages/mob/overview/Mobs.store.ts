import { useObservableMemo } from '@appleptr16/elemental';
import { Optional } from '@appleptr16/utilities';
import { createStore } from '@ngneat/elf';
import {
    getEntity,
    selectAllEntities,
    selectAllEntitiesApply,
    selectEntity,
    withEntities,
} from '@ngneat/elf-entities';
import { map } from 'rxjs';

import { getMappedMobSkills } from '../../../database/mobs/getMappedMobSkills';

export type MobSkillType = 'ability' | 'ai';
export interface MobSkill {
    name: string;
    type: MobSkillType;
    description: string;
    variants: string[];
    comments?: string;
}
const mobSkillStore = createStore(
    { name: 'Mobs' },
    withEntities<MobSkill, 'name'>({
        idKey: 'name',
        initialValue: getMappedMobSkills(),
    })
);
function mobSkillComparator(e1: MobSkill, e2: MobSkill) {
    return e1.name.localeCompare(e2.name);
}

export function useMobList(): MobSkill[] {
    return useObservableMemo(
        () =>
            mobSkillStore.pipe(
                selectAllEntities(),
                map((entities) => entities.sort(mobSkillComparator))
            ),
        [mobSkillStore],
        []
    );
}
export function useMob(name: string): Optional<MobSkill> {
    return useObservableMemo(
        () => mobSkillStore.pipe(selectEntity(name)),
        [mobSkillStore, name],
        mobSkillStore.query(getEntity(name))
    );
}
