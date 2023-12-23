import { createTheme, ThemeOptions } from '@mui/material';

export const defaultThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#de173c',
        },
        secondary: {
            main: '#99f5ff',
        },
        background: {
            default: '#130205',
            paper: '#363333',
        },
        info: {
            main: '#fff',
        },
        text: {
            primary: '#f390a2',
            secondary: '#99f5ff',
        },
        divider: '#f390a2',
    },
};
export const defaultTheme = createTheme(defaultThemeOptions);

const element = document.getElementById('root');
const color = defaultTheme.palette.background.default;
if (element != null) element.style.backgroundColor = color;
