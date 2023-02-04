import { AppButton } from '@app/ui';
import { Optional } from '@appleptr16/utilities';
import { Close } from '@mui/icons-material';
import { Card, MenuItem, Select, Stack } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { SpawnerCreate } from '../../Spawner';
import { SpawningRuleValues } from '../../SpawningRule';
import { SpawnerCreateSectionRuleProps } from '../SpawnerCreateSection';
import { BlockBlacklistRuleCard } from './BlockBlacklistRuleCard';
import { BlockWhitelistRuleCard } from './BlockWhitelistRuleCard';

export function SpawnerCreateRules(
    props: SpawnerCreateSectionRuleProps<'rules'>
) {
    let element: Optional<ReactNode> = undefined;
    switch (props.value.typeId) {
        case 'block_blacklist':
            element = (
                <BlockBlacklistRuleCard
                    index={props.index}
                    value={props.value}
                />
            );
            break;
        case 'block_whitelist':
            element = (
                <BlockWhitelistRuleCard
                    index={props.index}
                    value={props.value}
                />
            );
            break;
        case 'elevation':
            break;
        case 'flying':
            break;
    }
    const { register } = useFormContext<SpawnerCreate>();
    const [s, setState] = useState(false);
    return (
        <Card>
            <Stack padding={3}>
                <Stack direction="row">
                    <Select
                        {...register(`${props.index}.typeId`, {
                            onChange: () => setState((s) => !s),
                        })}
                        defaultValue="none"
                    >
                        {Object.keys(SpawningRuleValues).map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <AppButton onClick={props.remove}>
                        <Close />
                    </AppButton>
                </Stack>
                {element}
            </Stack>
        </Card>
    );
}
