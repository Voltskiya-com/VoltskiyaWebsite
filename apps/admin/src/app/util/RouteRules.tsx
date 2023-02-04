import { Optional } from '@appleptr16/utilities';
import { useIsLoggedIn } from '../elf/Session.store';
import { navTo } from './nav';

export function RouteRules() {
    const isLoggedIn: Optional<boolean> = useIsLoggedIn();

    // if (isLoginPage()) verifyNotLoggedIn(isLoggedIn);
    // if (isAuthorizedPage()) verifyLoggedIn(isLoggedIn);

    return null;
}
function isLoginPage() {
    return location.pathname.startsWith('/login');
}
function isAuthorizedPage() {
    return !location.pathname.startsWith('/login');
}

function verifyNotLoggedIn(isLoggedIn: Optional<boolean>) {
    if (isLoggedIn) navTo('/');
}
function verifyLoggedIn(isLoggedIn: Optional<boolean>) {
    if (isLoggedIn === false) navTo('/login');
}
