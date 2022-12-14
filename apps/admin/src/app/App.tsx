import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CommandsPage } from './components/pages/commands/CommandsPage';
import { LoginPage } from './components/pages/login/LoginPage';
import { MobsPage } from './components/pages/mobs/MobsPage';

import { OverviewPage } from './components/pages/overview/OverviewPage';
import { urls } from './util/routes';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
                <Route path={urls.commands} element={<CommandsPage />} />
                <Route path={urls.mobs} element={<MobsPage />} />
                <Route path={urls.login} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
