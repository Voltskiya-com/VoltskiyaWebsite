import { AppBar, Divider, Stack } from '@mui/material';

import { Optional } from '@app/util';
import { HeaderLinkProps, HeaderProps } from '../Header';
import { TopHeaderLink } from './TopHeaderLink';

function countDepth(path: string) {
    let depth: number = 0;
    for (const char of path) if (char === '/') depth++;
    return depth;
}
export function SubHeaderBarNav(props: HeaderProps) {
    let depth: number = 0;
    let chosen: Optional<HeaderLinkProps> = undefined;
    for (const link of props.links) {
        if (!location.pathname.startsWith(link.fullRoute)) continue;
        if (!chosen || depth < countDepth(link.fullRoute)) {
            if (!link.divisions) continue;
            chosen = link;
            depth = countDepth(link.fullRoute);
            continue;
        }
    }
    if (!chosen || !chosen.divisions) return null;
    return (
        <Stack
            marginLeft="7.5rem"
            justifyContent="flex-start"
            spacing={2}
            alignItems="center"
            direction="row"
            divider={
                <Divider flexItem orientation="vertical" variant="fullWidth" />
            }
        >
            {Object.values(chosen.divisions).map((link) => (
                <TopHeaderLink key={link.fullRoute} {...link} depth={2} />
            ))}
        </Stack>
    );
}
export function SubHeaderBar(props: HeaderProps) {
    return (
        <AppBar
            position="static"
            sx={{
                height: '2rem',
                bgcolor: props.bgcolor,
                zIndex: ({ zIndex }) => zIndex.appBar - 1,
            }}
        >
            <SubHeaderBarNav {...props} />
        </AppBar>
    );
}
