import { AppTypography } from '@app/ui';
import { Autocomplete, Chip, Input, Stack, TextField } from '@mui/material';

import materials from '../../../../database/Material.json';
import { BlockBlacklistRule } from '../../SpawningRule';

export function BlockBlacklistRuleCard(props: BlockBlacklistRule) {
    console.log(materials);
    return (
        <Stack>
            <Autocomplete
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
            {props.blocks?.map((block) => (
                <Chip label={block} />
            ))}
        </Stack>
    );
}
