import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CommandsPage } from './components/pages/commands/CommandsPage';
import { LoginPage } from './components/pages/login/LoginPage';
import { MobInspectPage } from './components/pages/mob/inspect/MobInspectPage';
import { MobsPage } from './components/pages/mob/overview/MobListPage';
import { SpawnerListPage } from './components/pages/spawn/SpawnerListPage';

import { OverviewPage } from './components/pages/overview/OverviewPage';
import { urls } from './util/routes';
import { SpawnerCreatePage } from './components/pages/spawn/create/SpawnerCreatePage';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
                <Route path={urls.commands} element={<CommandsPage />} />
                <Route path={urls.mob} element={<MobsPage />} />
                <Route path={'/mob/:mob_name'} element={<MobInspectPage />} />
                <Route path={'/spawn'} element={<SpawnerListPage />} />
                <Route
                    path={urls.spawn.create}
                    element={<SpawnerCreatePage />}
                />
                <Route path={urls.login} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
