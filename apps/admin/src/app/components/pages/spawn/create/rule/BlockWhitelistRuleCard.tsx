import { AppTypography } from '@app/ui';
import { BlockWhitelistRule } from '../../SpawningRule';

export function BlockWhitelistRuleCard(props: BlockWhitelistRule) {
    return <AppTypography>{props.blocks}</AppTypography>;
}
