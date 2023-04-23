import classes from './App.module.css'
import AboutSection from './components/AboutSection/AboutSection';
import PetsSection from './components/PetsSection/PetsSection';
import StartScreen from './components/StartScreen/StartScreen';
import HelpSection from './components/HelpSection/HelpSection';
import DonationSection from './components/DonationSection/DonationSection';

const App = () => {
  return (
    <div className={classes.App}>
        <StartScreen/>
        <AboutSection/>
        <PetsSection/>
        <HelpSection/>
        <DonationSection/>
    </div>
  );
}

export default App;
