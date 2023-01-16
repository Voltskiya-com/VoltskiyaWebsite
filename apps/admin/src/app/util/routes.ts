export const urls = {
    home: '/',
    commands: '/commands',
    mob: '/mob',
    login: '/login',
    spawn: {
        index: '/spawn',
        create: '/spawn/create',
    },
};

export const nav = {
    mob: {
        inspect: (name: string): string => `/mob/${name}`,
    },
};
