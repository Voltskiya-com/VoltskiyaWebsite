import { LoginRequest } from '@app/api';
import { AppButton, CenterForm, Page } from '@app/ui';
import { Stack, TextField } from '@mui/material';
import { FormHTMLAttributes } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { authQuery } from '../../../api/auth/AuthQuery';

export function LoginPage() {
    const { register, handleSubmit } = useForm<LoginRequest>();
    const onSubmit: SubmitHandler<LoginRequest> = (state) => {
        authQuery.login(state);
    };
    return (
        <Page title="Login">
            <CenterForm onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={1} alignItems="center">
                    <TextField {...register('username')} label="username" />
                    <TextField
                        {...register('password')}
                        type="password"
                        label="password"
                    />
                    <AppButton type="submit" variant="contained">
                        Login
                    </AppButton>
                </Stack>
            </CenterForm>
        </Page>
    );
}
