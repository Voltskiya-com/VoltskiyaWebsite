import { Page, Search } from '@app/ui';
import { Masonry } from '@mui/lab';
import { Stack } from '@mui/material';
import { useState } from 'react';

import { Mob } from '../../database/mobs/MapJsonMobs';
import { MobElement } from './Mob';
import { MobListFilter, useMobList } from './Mobs.store';

export function MobsPage() {
    const [filter, setFilter] = useState<MobListFilter>({ name: '' });
    const updateFilter = (part: Partial<MobListFilter>) =>
        setFilter({ ...filter, ...part });
    const setFilterName = (value: string) => updateFilter({ name: value });
    const mobs: Mob[] = useMobList(filter);
    return (
        <Page title="Mobs" extra={<Search onChange={setFilterName} />}>
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
