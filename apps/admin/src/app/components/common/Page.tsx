import { Stack, Divider, Box } from '@mui/material';
import { ReactNode } from 'react';
import { AppTypography } from '../base/AppTypography';

export interface PageProps {
    title: string;
    extra?: ReactNode;
    children?: ReactNode;
}
export function Page(props: PageProps) {
    return (
        <Stack sx={{ padding: 5 }}>
            <Stack direction="row" spacing={10} alignItems="center">
                <AppTypography
                    color="text.secondary"
                    variant="h2"
                    fontWeight={400}
                >
                    {props.title}
                </AppTypography>
                {props.extra}
            </Stack>
            <Divider />
            <br />
            {props.children}
        </Stack>
    );
}
