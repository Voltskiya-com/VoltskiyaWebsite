import { Stack, Divider, Box } from '@mui/material';
import { ReactNode } from 'react';
import { AppTypography } from '../base/AppTypography';
import RemoveIcon from '@mui/icons-material/Remove';
function PageTitle(props: PageProps) {
    const title = (
        <AppTypography color="primary" variant="h2" fontWeight={400}>
            {props.title}
        </AppTypography>
    );
    if (!props.description) return title;
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {title}
            <RemoveIcon />
            <AppTypography
                maxWidth="30rem"
                color="secondary"
                variant="h5"
                fontWeight={500}
            >
                {props.description}
            </AppTypography>
        </Stack>
    );
}

export interface PageProps {
    title: string;
    extra?: ReactNode;
    children?: ReactNode;
    description?: string;
}
export function Page(props: PageProps) {
    return (
        <Box sx={{ padding: 5 }}>
            <Stack
                direction="row"
                spacing={10}
                alignItems="center"
                flexGrow={1}
            >
                <PageTitle {...props} />
                {props.extra}
            </Stack>

            <Divider />
            <br />
            {props.children}
        </Box>
    );
}
