
import './App.css';
import Navbar from './Components/Navbar';
import AnimateVideo from './Components/AnimateVideo';
import Section from './Components/SectionFirst';
import HeroSecion from './Components/HeroSecion';
import PhonePic from './Components/PhonePic';
import Main from './Components/Main';
import Globle from './Components/Globle';
import Business from './Components/Business';
import Explore from './Components/Explore';
import ApiExplore from './Components/ApiExplore';
import Industry from './Components/Industry';
import Ringcard from './Components/Ringcard';
import Footer from "./Components/Footer"
import Mainfooter from "./Components/Mainfooter"
import Logos from './Components/Logos';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
         <Dropdown/>
  <AnimateVideo /> 
     <Logos/>
     <Section />
     <HeroSecion/>
     <PhonePic/>
     <Main/>
     <Globle/>
     <Business/>
     <Explore/>
     <ApiExplore/>
     <Industry/>
     <Ringcard/>
     <Footer/>
     <Mainfooter/>
    </div>
  );
}

export default App;
