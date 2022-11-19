import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DifferenceIcon from '@mui/icons-material/Difference';
import EditIcon from '@mui/icons-material/Edit';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { AppTypography } from '../../base/AppTypography';
import { Page } from '../../common/Page';
import { useBiomeList } from '../biomes/Biomes.store';
import { Mob, MobListFilter, useMobList, useMobMap } from './Mobs.store';
import { MobsFilter } from './MobsFilter';

function MobElement(props: Mob) {
    return (
        <Stack
            justifyContent="space-between"
            direction="row"
            bgcolor={(theme) => theme.palette.grey[800]}
        >
            <Stack direction="row">
                <Button>
                    <AppTypography>{props.name}</AppTypography>
                </Button>
            </Stack>
            <Stack direction="row" spacing={1}>
                <ContentCopyIcon />
                <DifferenceIcon />
                <EditIcon />
            </Stack>
        </Stack>
    );
}

export function MobsPage() {
    const [filter, setFilter] = useState<MobListFilter>({ name: '' });
    const updateFilter = (part: Partial<MobListFilter>) =>
        setFilter({ ...filter, ...part });
    const mobs: Mob[] = useMobList(filter);
    return (
        <Page title="Mobs">
            <Stack direction="row">
                <MobsFilter filter={filter} updateFilter={updateFilter} />
                <Stack spacing={1}>
                    {mobs.map((mob: Mob) => (
                        <MobElement key={mob.name} {...mob} />
                    ))}
                </Stack>
            </Stack>
        </Page>
    );
}
