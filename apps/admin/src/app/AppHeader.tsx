import { Header } from '@app/ui';
import { useTheme } from '@mui/material';

import logo from '../assets/common/Logo.png';
import { urls } from './util/routes';

export function AppHeader() {
    const bgcolor = useTheme().palette.background.paper;
    return (
        <Header
            home={{ route: urls.home, title: 'Voltskiya-GM' }}
            links={[
                { route: '/', title: 'Home' },
                { route: '/commands', title: 'Commands' },
                { route: '/mob', title: 'Mobs' },
                { route: '/spawn', title: 'Spawn' },
                { route: 'voltskiya.com', title: '/client' },
            ]}
            bgcolor={bgcolor}
            logo={logo}
        />
    );
}
