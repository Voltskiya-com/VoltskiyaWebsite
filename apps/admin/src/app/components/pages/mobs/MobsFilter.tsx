import { Search } from '@app/ui';
import { Chip, Stack } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { MobListFilter, useMobCategories } from './Mobs.store';

export interface MobsFilterProps {
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
        <Stack>
            <Search onChange={setFilterName} />
            <Stack>
                {categories.map((category) => (
                    <Chip
                        key={category}
                        onClick={() => toggleFilterTag(category)}
                        label={category}
                    />
                ))}
            </Stack>
        </Stack>
    );
}
