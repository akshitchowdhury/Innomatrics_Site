
import './App.css';
import NAv from './components/Navbar/NAv';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Conatct from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
        
    <Router>
    <NAv/> 
    

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact" element={<Conatct/>} />
    </Routes>
    
    <Footer/>
    </Router> 
    
    </div>
  );
}

export default App;
