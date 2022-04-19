import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experince from "./Components/Experince/Experince";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomial from "./Components/Testinomial/Testinomial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'
function App() {
  const theme = useContext (themeContext);
  
  const darkMode = theme.state.darkMode; 
  return (
    <div className="App" 
    style={{background: darkMode? 'black' : '',
    color : darkMode? 'white' : ''}}>
      <Navbar />
      <Intro />
      <Services />
      <Experince />
      <Work />
      <Portfolio />
      <Testinomial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
