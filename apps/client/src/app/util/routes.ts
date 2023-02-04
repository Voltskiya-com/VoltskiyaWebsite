import { Component } from 'react';
import { FeaturePage } from '../components/pages/feature/FeaturePage';
import { OverviewPage } from '../components/pages/overview/OverviewPage';
import { MobsPage } from '../components/pages/mob/overview/MobPage';
import { CommandsPage } from '../components/pages/commands/CommandsPage';

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
                render: OverviewPage,
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
        title: 'Recipe',
        route: '/recipe',
        fullRoute: '',
        render: OverviewPage,
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
