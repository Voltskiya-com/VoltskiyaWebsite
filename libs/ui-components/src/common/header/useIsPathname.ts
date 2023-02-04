function slash(path: string): string[] {
    if (!path.endsWith('/')) path += '/';
    if (!path.startsWith('/')) path = '/' + path;
    return path.split('/').filter((str) => str.length !== 0);
}
export function useIsPathname(checkProp: string, depth: number): boolean {
    let path = slash(location.pathname);
    let check = slash(checkProp);
    if (path.length < depth || check.length < depth) {
        return path.join('') === check.join('');
    }
    path = path.splice(0, depth);
    check = check.splice(0, depth);
    return path.join('') === check.join('');
}
