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
            description="A list of mob abilities. Gamemasters mix and match abilities to create mobs."
        >
            <Masonry defaultColumns={3} spacing={5}>
                {mobs.map((mob: MobSkill) => (
                    <MobCard key={mob.name} mob={mob} />
                ))}
            </Masonry>
        </Page>
    );
}
