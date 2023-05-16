import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css'
import WithSuspense from './components/hoc/WithSuspense';

const PageNotFound = WithSuspense(lazy(() => import('./components/Pages/PageNotFound')));
const StartPage = WithSuspense(lazy(() => import('./components/Pages/StartPage')));
const PetsPage = WithSuspense(lazy(() => import('./components/Pages/PetsPage')));

const App = () => {
  return (
    <div className={classes.app}>
          <Routes>
            <Route path='/CozyHouse/' element={<StartPage/>}/>
            <Route path='/CozyHouse/pets' element={<PetsPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
    </div>
  );
}

export default App;
