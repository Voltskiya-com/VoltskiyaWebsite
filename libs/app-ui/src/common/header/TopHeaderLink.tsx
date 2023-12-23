import { Button } from '@mui/material';

import { AppTypography } from '../../base';
import { useIsPathname } from './useIsPathname';

export function TopHeaderLink(props: TopHeaderLinkProps) {
    const isStarts: boolean = useIsPathname(props.fullRoute, props.depth);
    const color: string = isStarts ? 'primary.main' : 'info.main';
    const target: string = props.fullRoute.startsWith('http')
        ? '_blank'
        : '_self';
    return (
        <Button variant="text" target={target} href={props.fullRoute}>
            <AppTypography
                color={color}
                variant="h4"
                textTransform="capitalize"
                fontWeight={500}
            >
                {props.title}
            </AppTypography>
        </Button>
    );
}
export interface TopHeaderLinkProps {
    title: string;
    fullRoute: string;
    divisions?: Record<string, TopHeaderLinkProps>;
    depth: number;
}
