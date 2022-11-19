import 'reflect-metadata';

import { AppHeader } from '@app/ui';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, Stack, useTheme } from '@mui/material';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './app/App';
import { defaultTheme } from './app/util/appTheme';
import { environment } from './environments/environment';
import { urls } from './app/util/routes';
import logo from './assets/common/Logo.png';
render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Stack
                direction="column"
                justifyContent="space-between"
                minHeight="100vh"
            >
                <Box>
                    <AppHeader
                        home={{ route: urls.home, title: 'Voltskiya' }}
                        links={[
                            { route: '/', title: 'Home' },
                            { route: '/commands', title: 'Commands' },
                            { route: '/mobs', title: 'Mobs' },
                        ]}
                        bgcolor={defaultTheme.palette.grey[900]}
                        logo={logo}
                    />
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
