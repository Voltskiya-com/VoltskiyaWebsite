import { BlockBlacklistRuleCard } from './create/rule/BlockBlacklistRuleCard';
import { BlockWhitelistRuleCard } from './create/rule/BlockWhitelistRuleCard';

interface SpawningRuleAbstract {
    typeId: string;
}
export interface BlockBlacklistRule extends SpawningRuleAbstract {
    typeId: 'block_blacklist';
    blocks: string[];
}
export interface BlockWhitelistRule extends SpawningRuleAbstract {
    typeId: 'block_whitelist';
    blocks: string[];
}
export interface ElevationRule extends SpawningRuleAbstract {
    typeId: 'elevation';
    minElevation: number;
    maxElevation: number;
}
export interface FlyingRule extends SpawningRuleAbstract {
    typeId: 'flying';
    spawnAboveGroundHeight: number;
}
export interface NoRule extends SpawningRuleAbstract {
    typeId: 'none';
}
export type SpawningRule =
    | BlockBlacklistRule
    | BlockWhitelistRule
    | ElevationRule
    | FlyingRule
    | NoRule;

export const SpawningRuleValues: Record<SpawningRule['typeId'], unknown> = {
    block_blacklist: BlockBlacklistRuleCard,
    block_whitelist: BlockWhitelistRuleCard,
    elevation: 'elevation',
    flying: 'flying',
    none: 'none',
};
