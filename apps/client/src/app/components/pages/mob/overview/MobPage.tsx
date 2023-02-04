import { Page } from '@app/ui';
import { Masonry } from '@mui/lab';
import { Stack } from '@mui/material';
import { MobCard } from './MobCard';

import { MobSkill, useMobList } from './Mobs.store';

export function MobsPage() {
    let mobs: MobSkill[] = useMobList();
    return (
        <Page
            title="Mobs"
            description="A list of mob abilities. Abilities can be mix and matched to create mobs"
        >
            <Stack direction="row">
                <Masonry defaultColumns={3} spacing={5}>
                    {mobs.map((mob: MobSkill) => (
                        <MobCard key={mob.name} mob={mob} />
                    ))}
                </Masonry>
            </Stack>
        </Page>
    );
}
