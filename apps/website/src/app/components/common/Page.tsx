import { Stack, Divider, Box } from '@mui/material';
import { ReactNode } from 'react';
import { AppTypography } from '../base/AppTypography';

export interface PageProps {
    children?: ReactNode;
    title: string;
}
export function Page(props: PageProps) {
    return (
        <Stack sx={{ padding: 5 }}>
            <AppTypography color="text.secondary" variant="h2" fontWeight={400}>
                {props.title}
            </AppTypography>
            <Divider />
            <br />
            {props.children}
        </Stack>
    );
}
