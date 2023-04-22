import classes from './App.module.css'
import AboutSection from './components/AboutSection/AboutSection';
import PetsSection from './components/PetsSection/PetsSection';
import StartScreen from './components/StartScreen/StartScreen';

const App = () => {
  return (
    <div className={classes.App}>
        <StartScreen/>
        <AboutSection/>
        <PetsSection/>
    </div>
  );
}

export default App;
