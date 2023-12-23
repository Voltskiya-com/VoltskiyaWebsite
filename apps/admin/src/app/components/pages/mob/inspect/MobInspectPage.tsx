import { AppButton, AppTypography, Page } from '@app/ui';
import { Optional } from '@app/util';
import { Card, Chip, Stack, TextField } from '@mui/material';

import { Mob } from '../../../database/mobs/MapJsonMobs';
import { useUrlMob } from '../overview/Mobs.store';

export function MobInspectPage() {
    const mob: Optional<Mob> = useUrlMob();
    if (!mob)
        return (
            <AppTypography>
                Mob either could not be found or was not provided
            </AppTypography>
        );
    return (
        <Page title={mob.name}>
            <AppButton>Assign Spawning Properties</AppButton>
            <Stack>
                {mob.spawnerTags?.map((tag) => (
                    <Chip label={tag}></Chip>
                ))}
            </Stack>
            <TextField
                defaultValue={mob.computed.giveCommand}
                fullWidth
                multiline
            />
        </Page>
    );
}
