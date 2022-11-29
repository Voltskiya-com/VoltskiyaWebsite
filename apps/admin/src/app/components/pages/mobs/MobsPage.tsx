import { Page, Search } from '@app/ui';
import { Masonry } from '@mui/lab';
import { Stack } from '@mui/material';
import { useState } from 'react';

import { Mob } from '../../database/mobs/MapJsonMobs';
import { MobElement } from './Mob';
import { MobListFilter, useMobList } from './Mobs.store';
import { MobsFilter } from './MobsFilter';

function filterMobs(mobs: Mob[], filter: MobListFilter) {
    if (filter.categories.length == 0) {
        return mobs;
    }
    return mobs.filter((mob: Mob) => {
        for (const category of mob.gamemaster.categories) {
            if (filter.categories.includes(category)) return true;
        }
        return false;
    });
}
export function MobsPage() {
    const [filter, setFilter] = useState<MobListFilter>({
        name: '',
        categories: [],
    });
    let mobs: Mob[] = useMobList(filter);
    mobs = filterMobs(mobs, filter);
    return (
        <Page title="Mobs" extra={<MobsFilter filter={filter} setFilter={setFilter} />}>
            <Stack direction="row">
                <Masonry spacing={5}>
                    {mobs.map((mob: Mob) => (
                        <MobElement key={mob.name} {...mob} />
                    ))}
                </Masonry>
            </Stack>
        </Page>
    );
}
