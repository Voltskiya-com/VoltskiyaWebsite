import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { UrlRoute, urls } from './util/routes';

interface AppRoutesProps {
    thisRoute: UrlRoute;
    routes: Record<string, UrlRoute>;
}
function AppRoutes(props: AppRoutesProps) {
    if (props.thisRoute.fullRoute === location.pathname) {
        return <props.thisRoute.render />;
    }
    return (
        <Routes>
            {Object.values(props.routes).map((route: UrlRoute) => {
                return (
                    <Route
                        key={route.route}
                        path={route.route + '/*'}
                        element={
                            <AppRoutes
                                thisRoute={route}
                                routes={route.divisions ?? {}}
                            />
                        }
                    />
                );
            })}
        </Routes>
    );
}

export function App() {
    const pathname = location.pathname;
    if (pathname.endsWith('/')) {
        history.pushState({}, '', pathname.substring(0, pathname.length - 1));
    }
    return (
        <Box>
            <AppHeader />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <AppRoutes thisRoute={urls.Home} routes={urls} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Box>
    );
}
export default App;
