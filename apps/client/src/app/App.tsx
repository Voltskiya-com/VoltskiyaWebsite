import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { OverviewPage } from './components/pages/overview/OverviewPage';
import { urls } from './util/routes';
import { CommandsPage } from './components/pages/commands/CommandsPage';
import { MobsPage } from './components/pages/mob/overview/MobPage';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
                <Route path={urls.commands} element={<CommandsPage />} />
                <Route path={urls.mobs} element={<MobsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
