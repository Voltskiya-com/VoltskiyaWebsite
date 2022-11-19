export const urls = {
    home: '/',
    commands: '/commands',
    mobs: '/mobs',
};
export const nav = {};
export function navPathTo(url: string) {
    location.pathname = url;
}
