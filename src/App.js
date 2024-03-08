
import './App.css';
import NAv from './components/Navbar/NAv';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';



function App() {
  return (
    <div className="App">
        
    <Router>
    <NAv/> 
    

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    </Routes>
    </Router> 
    
    </div>
  );
}

export default App;
