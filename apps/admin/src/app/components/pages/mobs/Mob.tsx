import { AppTypography } from '@app/ui';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DifferenceIcon from '@mui/icons-material/Difference';
import { Card, Divider, Stack } from '@mui/material';
import { ReactNode, useState } from 'react';

import { Mob } from '../../database/mobs/MapJsonMobs';

interface ClickableIconProps {
    link: string;
    children: ReactNode;
}
function ClickableIcon(props: ClickableIconProps) {
    return (
        <a
            onClick={() => navigator.clipboard.writeText(props.link)}
            style={{ cursor: 'pointer' }}
        >
            {props.children}
        </a>
    );
}
export function MobElement(props: Mob) {
    return (
        <Card sx={{ maxWidth: '25rem' }}>
            <Stack
                padding={1}
                alignItems="center"
                justifyContent="space-between"
                direction="row"
            >
                <AppTypography variant="h5">{props.name}</AppTypography>
                <Stack direction="row" spacing={1}>
                    <ClickableIcon link={props.gamemaster.spawnEgg}>
                        <ContentCopyIcon fontSize="large" />
                    </ClickableIcon>
                    <ClickableIcon link={props.gamemaster.spawnEgg}>
                        <DifferenceIcon fontSize="large" />
                    </ClickableIcon>
                </Stack>
            </Stack>
            <Divider />
            <Stack padding={2} justifyContent="space-between" direction="row">
                <Stack>
                    {props.gamemaster.tags.map((tag) => (
                        <AppTypography key={tag}>{tag}</AppTypography>
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
}
