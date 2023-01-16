import { AppButton } from '@app/ui';
import { Close } from '@mui/icons-material';
import { Container, Stack } from '@mui/material';
import { ReactNode } from 'react';
import {
    FieldArrayPath,
    FieldArrayPathValue,
    PathValue,
    useFieldArray,
    useFormContext,
    UseFormRegister,
    UseFormRegisterReturn,
} from 'react-hook-form';

import { SpawnerCreate } from '../Spawner';

export interface SpawnerCreateSectionRuleProps<
    Key extends FieldArrayPath<SpawnerCreate>
> {
    index: `${Key}.${number}`;
    value: SpawnerCreate[Key][number];
    remove: () => void;
}

export interface SpawnerCreateSectionProps<
    Key extends FieldArrayPath<SpawnerCreate>
> {
    name: Key;
    defaultValue: SpawnerCreate[Key][number];
    mapValue: (props: SpawnerCreateSectionRuleProps<Key>) => ReactNode;
}
export function SpawnerCreateSection<Key extends FieldArrayPath<SpawnerCreate>>(
    props: SpawnerCreateSectionProps<Key>
) {
    const { control, register, getValues } = useFormContext<SpawnerCreate>();
    const { fields, append, prepend, remove, swap, move, insert } =
        useFieldArray<SpawnerCreate, FieldArrayPath<SpawnerCreate>>({
            control,
            name: props.name,
        });
    return (
        <Stack alignItems="center">
            <Container>
                <AppButton
                    variant="contained"
                    onClick={() => prepend(props.defaultValue)}
                >
                    New
                </AppButton>
            </Container>
            {fields.map((field, index) => (
                <Stack key={field.id} direction="column">
                    {props.mapValue({
                        index: `${props.name}.${index}`,
                        value: getValues(`${props.name}.${index}`),
                        remove: () => remove(index),
                    })}
                </Stack>
            ))}
        </Stack>
    );
}
