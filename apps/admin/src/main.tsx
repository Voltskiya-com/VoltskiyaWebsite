import 'reflect-metadata';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './app/App';
import { AppHeader } from './app/AppHeader';
import { defaultTheme } from './app/util/appTheme';
import { RouteRules } from './app/util/RouteRules';
import { environment } from './environments/environment';

render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <RouteRules />
            <CssBaseline />
            <Box>
                <AppHeader />
                <App />
            </Box>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
);
if (environment.production) {
    enableElfProdMode();
}
