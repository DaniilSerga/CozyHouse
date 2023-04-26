import classes from './App.module.css'
import Footer from './components/Footer/Footer';
import StartPage from './components/StartPage';

const App = () => {
  return (
    <div className={classes.App}>
        <StartPage/>
        <Footer/>
    </div>
  );
}

export default App;
