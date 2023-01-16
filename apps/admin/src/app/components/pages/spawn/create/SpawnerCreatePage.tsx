import { Page } from '@app/ui';
import { Masonry } from '@mui/lab';
import { Stack } from '@mui/material';
import {
    FormProvider,
    SubmitHandler,
    useFieldArray,
    useForm,
} from 'react-hook-form';
import { SpawnerCreate } from '../Spawner';
import { SpawnerCreateRules } from './rule/SpawnerCreateRules';
import {
    SpawnerCreateSection,
    SpawnerCreateSectionRuleProps,
} from './SpawnerCreateSection';

export function SpawnerCreatePage() {
    const form = useForm<SpawnerCreate>({
        defaultValues: {
            extendsClause: [],
            rules: [],
            temporalRules: [],
            modifiers: [],
            preModifiers: [],
        },
    });
    const onSubmit: SubmitHandler<SpawnerCreate> = (values) => {
        console.log(values);
    };
    return (
        <Page title="Spawner/create">
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Masonry>
                        <SpawnerCreateSection
                            name="rules"
                            mapValue={(
                                props: SpawnerCreateSectionRuleProps<'rules'>
                            ) => <SpawnerCreateRules {...props} />}
                            defaultValue={{ typeId: 'none' }}
                        />
                    </Masonry>
                </form>
            </FormProvider>
        </Page>
    );
}
