import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WithSuspense from './components/hoc/WithSuspense';
import Dashboard from './components/Pages/Dashboard';
import classes from './App.module.css';

const PageNotFound = WithSuspense(lazy(() => import('./components/Pages/PageNotFound')));
const StartPage = WithSuspense(lazy(() => import('./components/Pages/StartPage')));
const PetsPage = WithSuspense(lazy(() => import('./components/Pages/PetsPage')));

const App = () => {
    return (
        <Routes>
            <Route path='/CozyHouse/' element={<Dashboard />}>
                <Route index element={<StartPage />} />
                <Route path='pets' element={<PetsPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
