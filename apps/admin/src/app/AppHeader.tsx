import { Header } from '@app/ui';
import { useTheme } from '@mui/material';

import logo from '../assets/common/Logo.png';
import { urls } from './util/routes';

export function AppHeader() {
    const bgcolor = useTheme().palette.background.paper;
    return (
        <Header
            home={{ fullRoute: urls.home, title: 'Voltskiya-GM' }}
            links={[
                { fullRoute: '/', title: 'Home' },
                { fullRoute: '/commands', title: 'Commands' },
                { fullRoute: '/mob', title: 'Mobs' },
                { fullRoute: '/spawn', title: 'Spawn' },
                { fullRoute: 'voltskiya.com', title: '/client' },
            ]}
            bgcolor={bgcolor}
            logo={logo}
        />
    );
}
