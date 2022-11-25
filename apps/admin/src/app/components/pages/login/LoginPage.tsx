import { AppButton, AppPaper, Page } from '@app/ui';
import { TextField } from '@mui/material';
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { Box, Paper, Stack } from '@mui/material';
import { LoginRequest } from '@app/api';
import { authQuery } from '../../../api/auth/AuthQuery';
export function LoginPage() {
    const { register, handleSubmit } = useForm<LoginRequest>();
    const onSubmit: SubmitHandler<LoginRequest> = (state) => {
        authQuery.login(state);
    };
    return (
        <Page title="Login">
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack alignItems="center">
                        <Paper sx={{ padding: 3 }}>
                            <Stack spacing={1} alignItems="center">
                                <TextField
                                    {...register('username')}
                                    label="username"
                                />
                                <TextField
                                    {...register('password')}
                                    label="password"
                                />
                                <AppButton type="submit" variant="contained">
                                    Login
                                </AppButton>
                            </Stack>
                        </Paper>
                    </Stack>
                </form>
            </Box>
        </Page>
    );
}
