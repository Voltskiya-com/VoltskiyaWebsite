import { Email, GitHub, LinkedIn, Web } from '@mui/icons-material';
import { AppBar, Box, Divider, Link, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { AppTypography } from '../base/AppTypography';

interface ContactInfoProps {
    title: string;
    href: string;
    value: string;
    icon: ReactNode;
}
function ContactInfo(props: ContactInfoProps) {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={1}
                justifyContent="start"
                alignItems="center"
            >
                {props.icon}
                <Link color="secondary" variant="h6" href={props.href}>
                    {props.value}
                </Link>
            </Stack>
        </Box>
    );
}

export function BottomBar() {
    const appBarColor = '#333333';
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: 5,
                position: 'static',
                bgcolor: appBarColor,
                zIndex: (theme) => theme.zIndex.appBar,
            }}
        >
            <Stack alignItems="center">
                <Stack
                    justifyContent="flex-start"
                    spacing={1}
                    alignItems="start"
                    direction="column"
                    padding={3}
                >
                    <Divider variant="fullWidth" flexItem>
                        <AppTypography variant="h4">Contact</AppTypography>
                    </Divider>
                </Stack>
            </Stack>
        </AppBar>
    );
}
