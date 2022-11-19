import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { OverviewPage } from './components/pages/overview/OverviewPage';
import { urls } from './util/routes';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={urls.home} element={<OverviewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
