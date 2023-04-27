import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css'
import Footer from './components/Footer/Footer';
import StartPage from './components/Pages/StartPage';
import PetsPage from './components/Pages/PetsPage';
import PageNotFound from './components/Pages/PageNotFound';

const App = () => {
  return (
    <div className={classes.App}>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/pets' element={<PetsPage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
