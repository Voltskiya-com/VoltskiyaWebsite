import { Autocomplete, Box, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
} from 'react';
import { AppTypography } from '../../base/AppTypography';
import { useBiomeList } from '../biomes/Biomes.store';
import { MobListFilter, useMobMap } from './Mobs.store';

export interface MobsFilterProps {
    filter: MobListFilter;
    updateFilter: (filter: Partial<MobListFilter>) => void;
}

export function MobsFilter(props: MobsFilterProps) {
    const mobNames: string[] = useMobMap('name');
    const biomes: string[] = useBiomeList().map((biome) => biome.name);
    const updateMobName: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        props.updateFilter({ name: event.target.value });
    };
    return (
        <Stack>
            <TextField label="Name" onChange={updateMobName} />
            <Autocomplete
                color="primary"
                renderInput={(params) => (
                    <TextField {...params} label="Biome" />
                )}
                sx={{ width: 300 }}
                renderOption={(props, option) => (
                    <AppTypography
                        {...props}
                        bgcolor={(theme) => theme.palette.grey[600]}
                        color={'contrastText.primary'}
                    >
                        {option}
                    </AppTypography>
                )}
                options={biomes}
            />
        </Stack>
    );
}
