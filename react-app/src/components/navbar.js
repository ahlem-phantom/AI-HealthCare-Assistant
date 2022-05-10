/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect } from "react";
import { useState } from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
function Navbar() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
     
        {currentUser ? (
           <div className="header">
           <div className="header-left">
             <a className="logo">
               <img src="assets/img/logo.png" width={35} height={35} alt="logo" />{" "}
               <span>NearestDoctor</span>
             </a>
           </div>
          <div className="main-wrapper">
            <div>
              <div>
                <a id="toggle_btn" href="javascript:void(0);">
                  <i className="fa fa-bars" />
                </a>
                <a
                  id="mobile_btn"
                  className="mobile_btn float-left"
                  href="#sidebar"
                >
                  <i className="fa fa-bars" />
                </a>

                <ul className="nav user-menu float-right">
                <li className="nav-item active"><Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/">
                          <span >Home</span>
                       </Link>
                       </li>
                       { currentUser.role ==='patient' ? (
                       <li className="nav-item active"><Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/patient/app">
                          <span >My Space</span>
                       </Link></li>
                       ):(
                       
                       <div></div>
                       )}

                       { currentUser.role ==='doctor' ? (
                       <li className="nav-item active"><Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/doctor/app">
                          <span >My Space</span>
                       </Link></li>
                       ):(
                       
                       <div></div>
                       )}

                <li className="nav-item">        
                 <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/shop">
                    <span>Shop</span>
                 </Link>     
        </li>    
        <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/blog">
                          <span>Blog</span>
                       </Link>     
              </li> 
              <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/team">
                          <span>About</span>
                       </Link>     
              </li>
              <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/contact">
                          <span>Contact Us</span>
                       </Link>     
              </li>    
        
                  <li className="nav-item dropdown has-arrow">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link user-link"
                      data-toggle="dropdown"
                    >
                      <span className="user-img">
                        <img
                          className="rounded-circle"
                          src="assets/img/user.jpg"
                          width={24}
                          alt="Admin"
                        />
                        <span className="status online" />
                      </span>
                      <span>{currentUser.username}</span>
                    </a>
                    <div className="dropdown-menu">
                      { currentUser.role ==='patient' ? (
                           <Link
                           className="dropdown-item"
                           to={`/patient/edit-doctor/${currentUser.id}`}
                           component={Link}
                         >
                           Edit Profile
                         </Link>
                       ):(
                       
                       <div></div>
                       )}

                       { currentUser.role ==='doctor' ? (
                           <Link
                           className="dropdown-item"
                           to={`/doctor/edit-doctor/${currentUser.id}`}
                           component={Link}
                         >
                           Edit Profile
                         </Link>
                       ):(
                       
                       <div></div>
                       )}            
                      <a
                        className="dropdown-item"
                        href="/login"
                        onClick={logOut}
                      >
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
          <div className="container">
          <img src="assets/img/logo.png" width={35} height={35} alt="logo" />{" "}
           &nbsp;
            <a className="navbar-brand" href="index.html">Nearest<span >Doctor</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/">
                          <span >Home</span>
                       </Link></li>
                       <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/team">
                          <span>About</span>
                       </Link>     
              </li>                 <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/price">
                          <span>Pricing</span>
                       </Link>     
              </li> 
                        <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/blog">
                          <span>Blog</span>
                       </Link>     
              </li>           <li className="nav-item">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/contact">
                          <span>Contact Us</span>
                       </Link>     
              </li> 
              <li className="nav-item">        
                 <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/shop">
                    <span>Shop</span>
                 </Link>     
        </li>        
               <li className="nav-item cta">        
                       <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/role">
                          <span>Get Started</span>
                       </Link>     
              </li>
              </ul>
            </div>
          </div>
        </nav>
        )}

      </div>
  );
}

export default Navbar;
