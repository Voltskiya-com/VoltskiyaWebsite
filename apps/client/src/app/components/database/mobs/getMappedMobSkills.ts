import { MobSkill, MobSkillType } from '../../pages/mob/overview/Mobs.store';
import abilities from './Abilities.json';
import Ai from './Ai.json';

export function getMappedMobSkills(): MobSkill[] {
    const mappedAbilities: MobSkill[] = Object.entries(abilities).map((entry) =>
        mapMobSkill(entry, 'ability')
    );
    const mappedAi: MobSkill[] = Object.entries(Ai).map((entry) =>
        mapMobSkill(entry, 'ai')
    );
    return [...mappedAbilities, ...mappedAi];
}

function mapMobSkill(
    [name, value]: [name: string, value: Omit<MobSkill, 'name' | 'type'>],
    type: MobSkillType
): MobSkill {
    return { name, type, ...value };
}
