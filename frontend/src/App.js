import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import section from './Components/HomeComponents/Section1';
import Footer from './Components/Footer';
import Home from './Components/Home';

import {Route ,Routes} from "react-router-dom";
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';



function App() {
  return (
    <div>
      
    
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Home/> } />
      <Route  path="/Contactus" element={<ContactUs/> }/>
      <Route  path="*" element={ <NotFound/>}/>
    </Routes>
    <Footer/>


</div>

  );
}

export default App;
