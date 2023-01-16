import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeOptions } from '@mui/material';

const colors = [
    0x03071e, 0x370617, 0x6a040f, 0x9d0208, 0xd00000, 0xdc2f02, 0xe85d04,
    0xf48c06, 0xfaa307, 0xffba08,
];
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
console.log(defaultTheme.palette.secondary);
const element = document.getElementById('root');
const color = defaultTheme.palette.background.default;
if (element != null) element.style.backgroundColor = color;
