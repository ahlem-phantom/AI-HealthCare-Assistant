import { Link } from "react-router-dom";
import login from "../pages/Login"
function Navbar(){


return (
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
 
  <div className="container">
 {/*<div className="col-xl-2 col-lg-2 col-md-1">
  <div className="logo">
    <a href="index.html"><img src="assets/images/logo.png" style={{width: '80%'}} alt="" /></a>
  </div>
</div>*/}

    <a className="navbar-brand" href="home">Nearest<span style={{color : 'blue'}}>Doctor</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu" /> Menu
    </button>
    {/*<div className="collapse navbar-collapse" id="ftco-nav">*/}
    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">

      <ul className="navbar-nav ml">
        <li className="nav-item">
          <a href="#home" className="nav-link js-scroll active">Home</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link js-scroll ">Services</a>
        </li>
        <li className="nav-item">
          <a href="#doctors" className="nav-link js-scroll ">Doctors</a>
        </li>
        <li className="nav-item">
          <a href="#price" className="nav-link js-scroll ">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="#blog" className="nav-link js-scroll ">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link js-scroll ">Contact</a>
        </li>
        <li className="nav-item cta">
        <a className="nav-link js-scroll " data-toggle="modal" data-target="#modalRequest">
        <Link component={Link} to="/login">  
        <span>Sign in</span>
        </Link>
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



	  
      );
}
export default Navbar;