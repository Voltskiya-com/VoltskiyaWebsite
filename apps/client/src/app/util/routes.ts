import { CommandsPage } from '../components/pages/commands/CommandsPage';
import { FeaturePage } from '../components/pages/feature/FeaturePage';
import { MobsPage } from '../components/pages/mob/overview/MobPage';
import { OverviewPage } from '../components/pages/overview/OverviewPage';
import { PlaceholderPage } from '../components/pages/placeholder/PlaceholderPage';

export const urls = {
    Home: {
        title: 'Home',
        route: '/',
        fullRoute: '',
        render: OverviewPage,
    },
    Features: {
        title: 'Features',
        route: '/feature',
        fullRoute: '',
        render: FeaturePage,
        divisions: {
            home: {
                title: 'Top',
                route: '/',
                fullRoute: '',
                render: FeaturePage,
            },
            commands: {
                title: 'Commands',
                route: '/commands',
                fullRoute: '',
                render: CommandsPage,
            },
            mobs: {
                title: 'Mobs',
                route: '/mobs',
                fullRoute: '',
                render: MobsPage,
            },
        },
    },
    Tools: {
        title: 'Tools',
        route: '/tool',
        fullRoute: '',
        render: PlaceholderPage,
        divisions: {
            top: {
                title: 'Top',
                route: '',
                fullRoute: '',
                render: PlaceholderPage,
            },
            recipe: {
                title: 'Recipes',
                route: '/recipe',
                fullRoute: '',
                render: PlaceholderPage,
            },
        },
    },
};
export interface UrlRoute {
    title: string;
    route: string;
    fullRoute: string;
    render: () => JSX.Element;
    divisions?: Record<string, UrlRoute>;
}
function remap(urls: Record<string, UrlRoute>, url: string) {
    for (const key in urls) {
        const subroute: string = url + urls[key].route;
        urls[key].fullRoute = subroute;
        const divisions = urls[key].divisions;
        if (divisions) remap(divisions, subroute);
    }
}

remap(urls, '');
