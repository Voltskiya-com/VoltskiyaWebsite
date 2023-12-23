import { Header } from '@app/ui';
import { useTheme } from '@mui/material';

import logo from '../assets/common/Logo.png';
import { urls } from './util/routes';

export function AppHeader() {
    const palette = useTheme().palette;
    const bgcolor = palette.grey[900];
    return (
        <Header
            home={urls.Home}
            links={[
                urls.Home,
                urls.Features,
                urls.Tools,
                { fullRoute: 'https://map.voltskiya.com', title: 'Map' },
            ]}
            bgcolor={bgcolor}
            logo={logo}
        />
    );
}
