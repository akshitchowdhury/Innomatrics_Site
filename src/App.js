
import './App.css';
import NAv from './components/Navbar/NAv';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Conatct from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Career from './components/Career/Career';
// import Appdev from './components/Services/Inno Services/Appdev';


import DigitalMarket from './components/Services/Inno Services/DigitalMarket';
import LogoDesign from './components/Services/Inno Services/LogoDesign';
import SocialMedia from './components/Services/Inno Services/SocialMedia';
import WebDesign from './components/Services/Inno Services/WebDesign';
import WebDev from './components/Services/Inno Services/WebDev';
import Appdev from './components/Services/Inno Services/Appdev';
import SocialIcons from './components/Social Icons/SocialIcons';




function App() {
  return (
    <div className="App">
        
    <Router>
    <NAv/> 
    
    <SocialIcons/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    
    <Route path="/contact" element={<Conatct/>} /> 
    <Route path="/portfolio" element={<Portfolio/>} /> 
    <Route path="/career" element={<Career/>} /> 
    
    <Route path="/appdev" element={<Appdev />} /> 
          <Route path="/digitalmarket" element={<DigitalMarket />} /> 
          <Route path="/logodesign" element={<LogoDesign />} /> 
          <Route path="/socialmedia" element={<SocialMedia />} /> 
          <Route path="/webdesign" element={<WebDesign />} /> 
          <Route path="/webdev" element={<WebDev />} /> 
    </Routes>
    
    <Footer/>
    </Router> 
    
    </div>
  );
}

export default App;
