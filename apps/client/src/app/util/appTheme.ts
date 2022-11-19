import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeOptions } from '@mui/material';

export const defaultThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#5122bf',
        },
        secondary: {
            main: '#649c3a',
        },
        background: {
            default: '#232323',
            paper: '#132435',
        },
        text: {
            primary: '#b4a99f',
            secondary: '#fff',
        },
        info: { main: '#d1ab64' },
        divider: '#fff',
        grey: { [500]: '#333333' },
    },
};
export const defaultTheme = createTheme(defaultThemeOptions);

const element = document.getElementById('root');
const color = defaultTheme.palette.background.default;
if (element != null) element.style.backgroundColor = color;
