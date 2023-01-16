import { AppTypography } from '@app/ui';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DifferenceIcon from '@mui/icons-material/Difference';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Divider, Link, Stack } from '@mui/material';
import { nav, urls } from 'apps/admin/src/app/util/routes';
import { ReactNode } from 'react';

import { Mob } from '../../../database/mobs/MapJsonMobs';

interface ClickableIconProps {
    copy: string;
    children: ReactNode;
}
function ClickableIcon(props: ClickableIconProps) {
    return (
        <a
            onClick={() => navigator.clipboard.writeText(props.copy)}
            style={{ cursor: 'pointer' }}
        >
            {props.children}
        </a>
    );
}
export function MobCard(props: Mob) {
    return (
        <Card sx={{ maxWidth: '25rem' }}>
            <Link href={nav.mob.inspect(props.name)} underline="none">
                <Stack
                    padding={1}
                    alignItems="center"
                    justifyContent="space-between"
                    direction="row"
                >
                    <AppTypography variant="h4" color="primary">
                        {props.name}
                    </AppTypography>
                    <Stack direction="row" spacing={1}>
                        <ClickableIcon copy={props.computed.giveCommand}>
                            <ContentCopyIcon
                                color="secondary"
                                fontSize="large"
                            />
                        </ClickableIcon>
                        <ClickableIcon copy={props.computed.giveCommand}>
                            <DifferenceIcon
                                color="secondary"
                                fontSize="large"
                            />
                        </ClickableIcon>
                    </Stack>
                </Stack>
                <Divider />
                <Stack
                    padding={2}
                    justifyContent="space-between"
                    direction="row"
                >
                    <Stack>
                        {props.computed.scoreboardTags.map((tag) => (
                            <AppTypography key={tag}>{tag}</AppTypography>
                        ))}
                    </Stack>
                </Stack>
            </Link>
        </Card>
    );
}
