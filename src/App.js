
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
import PrivacyPolicy from './components/Footer/Legal/PrivacyPolicy';
import TermsOfService from './components/Footer/Legal/TermsOfService';
import ContentDisclaimer from './components/Footer/Legal/ContentDisclaimer';
import RefundCancellationPolicy from './components/Footer/Legal/RefundCancellationPolicy';
import DataRetentionPolicy from './components/Footer/Legal/DataRetentionPolicy';




function App() {
  return (
    <div className="App overflow-clip">
        
    <Router>
    <NAv/> 
    
    {/* <SocialIcons/> */}
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
          <Route path="/privacy" element={<PrivacyPolicy />} /> 
          <Route path="/terms" element={<TermsOfService />} /> 
          <Route path="/content" element={<ContentDisclaimer />} /> 
          <Route path="/refund" element={<RefundCancellationPolicy />} /> 
          <Route path="/data" element={<DataRetentionPolicy />} /> 
    </Routes>
    
    <Footer/>
    </Router> 
    
    </div>
  );
}

export default App;
