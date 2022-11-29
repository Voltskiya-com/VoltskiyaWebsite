import { Header } from '@app/ui';
import { useTheme } from '@mui/material';

import logo from '../assets/common/Logo.png';
import { urls } from './util/routes';

export function AppHeader() {
    const bgcolor = useTheme().palette.grey[900];
    return (
        <Header
            home={{ route: urls.home, title: 'Voltskiya-GM' }}
            links={[
                { route: '/', title: 'Home' },
                { route: '/commands', title: 'Commands' },
                { route: '/mobs', title: 'Mobs' },
                { route: 'voltskiya.com', title: '/client' },
                { route: 'api.voltskiya.com', title: '/api' },
            ]}
            bgcolor={bgcolor}
            logo={logo}
        />
    );
}
