import { AppTypography } from '@app/ui';

import { BlockWhitelistRule } from '../../SpawningRule';

export interface BlockWhitelistRuleCardProps {
    index: string;
    value: BlockWhitelistRule;
}
export function BlockWhitelistRuleCard(props: BlockWhitelistRuleCardProps) {
    return <AppTypography>{props.value.blocks}</AppTypography>;
}
