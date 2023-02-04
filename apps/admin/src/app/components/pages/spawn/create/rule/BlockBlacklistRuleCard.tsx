import { AppTypography } from '@app/ui';
import { Autocomplete, Chip, Input, Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import materials from '../../../../database/Material.json';
import { BlockBlacklistRule } from '../../SpawningRule';

export interface BlockBlacklistRuleCardProps {
    index: string;
    value: BlockBlacklistRule;
}
export function BlockBlacklistRuleCard(props: BlockBlacklistRuleCardProps) {
    const { register } = useFormContext();

    return (
        <Stack spacing={3}>
            <Autocomplete
                {...register(`${props.index}.blocks`)}
                renderInput={(params) => (
                    <TextField {...params} label="blocks" />
                )}
                limitTags={100}
                renderOption={(params, value) => (
                    <AppTypography {...params}>{value}</AppTypography>
                )}
                multiple
                options={materials}
            />
            {props.value.blocks?.map((block) => (
                <Chip label={block} />
            ))}
        </Stack>
    );
}
