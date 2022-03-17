import {Link} from "react-router-dom";
import logo from "../img/logo.png"


function Navbar(){


return (
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
  <div className="container">
    <img src={logo} alt="aa" style={{width: 100}}/>
    <a className="navbar-brand" href="index.html">HealthCare-<span>Assistant</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu" /> Menu
    </button>
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><Link to={'/'} className="nav-link">Home</Link></li>
        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
        <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="doctors.html" className="nav-link">Doctors</a></li>
        <li className="nav-item"><a href="blog.html" className="nav-link"></a></li>
        <li className="nav-item"><Link to={'/Contactus'} className="nav-link">Contact</Link></li>
        <li className="nav-item cta"><a href="contact.html" className="nav-link" data-toggle="modal" data-target="#modalRequest"><span>Make an Appointment</span></a></li>
      </ul>
    </div>
  </div>
</nav>

	  
      );
}
export default Navbar;