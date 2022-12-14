import 'reflect-metadata';

import { ThemeProvider } from '@emotion/react';
import { Box, Container, CssBaseline, Stack } from '@mui/material';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './app/App';
import { defaultTheme } from './app/util/appTheme';
import { enableElfProdMode } from '@ngneat/elf';
import { environment } from './environments/environment';
import { AppHeader } from './app/AppHeader';
import { RouteRules } from './app/util/RouteRules';

render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <RouteRules />
            <CssBaseline />
            <Stack
                direction="column"
                justifyContent="space-between"
                minHeight="100vh"
            >
                <Box>
                    <AppHeader />
                    <App />
                </Box>
            </Stack>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
);
if (environment.production) {
    enableElfProdMode();
}
