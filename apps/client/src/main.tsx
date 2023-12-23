import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { enableElfProdMode } from '@ngneat/elf';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './app/App';
import { defaultTheme } from './app/util/appTheme';
import { environment } from './environments/environment';

render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
);
if (environment.production) {
    enableElfProdMode();
}
