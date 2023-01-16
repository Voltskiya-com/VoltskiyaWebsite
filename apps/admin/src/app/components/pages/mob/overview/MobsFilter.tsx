import { AppButton, Search } from '@app/ui';
import { Box, Chip, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { Dispatch, SetStateAction } from 'react';

import { MobListFilter, useMobCategories } from './Mobs.store';

export interface MobsFilterProps {
    filter: MobListFilter;
    setFilter: Dispatch<SetStateAction<MobListFilter>>;
}

export function MobsFilter(props: MobsFilterProps) {
    const setFilterName: (name: string) => void = (name: string) =>
        props.setFilter((filter: MobListFilter) => ({ ...filter, name }));

    const toggleFilterTag: (tag: string) => void = (category: string) =>
        props.setFilter((filter: MobListFilter) => {
            const tagIndex: number = filter.categories.indexOf(category);
            if (tagIndex >= 0) filter.categories.splice(tagIndex, 1);
            else filter.categories.push(category);
            return { ...filter };
        });

    const categories: string[] = useMobCategories();
    return (
        <Stack direction="row" alignItems="center" width="100%" spacing={5}>
            <Search onChange={setFilterName} />
            <Stack direction="row" flexWrap="wrap">
                {categories.map((category) => (
                    <Chip
                        key={category}
                        onClick={() => toggleFilterTag(category)}
                        label={category}
                        color={
                            props.filter.categories.includes(category)
                                ? 'primary'
                                : 'default'
                        }
                    />
                ))}
            </Stack>
            <AppButton variant="contained">Create Mob</AppButton>
        </Stack>
    );
}
