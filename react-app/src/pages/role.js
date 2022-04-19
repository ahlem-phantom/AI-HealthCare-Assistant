/* eslint-disable react/style-prop-object */
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
function Role() {

  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }
  
   useEffect(() => {
   loadScript(`${process.env.PUBLIC_URL}js/main.js`)
  
    })
    return (
<div>
  <Navbar />
<section className="home-slider owl-carousel">
  <div className="slider-item bread-item" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container" data-scrollax-parent="true">
      <div className="row slider-text align-items-end">
        <div className="col-md-7 col-sm-12 ftco-animate mb-5">
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Sign Up</span></p>
          <h1 className="mb-3 navbar-brand" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Sign Up In <span style={{ fontWeight : 'bold'  }}>Nearest</span><span style={{color : 'blue', fontWeight : 'bold' }}>Doctor</span></h1>

        </div>
      </div>
    </div>
  </div>
</section>
<section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center heading-section ftco-animate">
          <h2 >Sign Up</h2>
          Already have an account ? 
          &nbsp;
          <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/login">

<p className="button text-center"><a className=" px-4 py-3">     
              <span>Sign In</span>
           </a>
           
</p>
</Link> 
  
          <div className="row no-gutters">
      <div className="col-md-6 color-3 p-4">

          <div>
  <div className="ftco-animate">
    <div className="pricing-entry text-center">
    <a href="#" className="gallery img d-flex align-items-center" style={{backgroundImage: 'url(images/doctor.jpg)'}}></a>
    <div class="img-overlay">
    <button className="role-button text-center cta">DOCTOR</button>
  </div>
  <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/register-doctor">

      <p className="button text-center"><a className="btn btn-primary btn-outline-primary px-4 py-3">     
                    <span>Sign Up</span>
                 </a>
                 
      </p>
      </Link>  

    </div>
  </div>
</div>
<br />
  <div className="container">
    <div className="row justify-content-center">
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="pricing-entry text-center">
          <div>
            <h3 className="mb-4">Features</h3>
          </div>
          <ul className="">
            <li><span class="icon-check"></span>  Diagnostic Services</li>
            <li><span class="icon-check"></span>  Professional Consultation</li>
            <li><span class="icon-check"></span>  Tooth Implants</li>
            <li><span class="icon-check"></span>  Surgical Extractions</li>
            <li><span class="icon-check"></span>  Teeth Whitening</li>
          </ul>
        </div>
      </div>
      </div>
    </div>

         
        </div>
        <div className="col-md-6 color-3 p-4">

        <div>
        <div className="ftco-animate">
          <div className="pricing-entry text-center">
          <a href="#" className="gallery img d-flex align-items-center" style={{backgroundImage: 'url(images/patient.jpg)'}}></a>
          <div class="img-overlay">
    <button className="role-button text-center cta">PATIENT</button>
  </div>
  <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/register-patient">

            <p className="button text-center"><a className="btn btn-primary btn-outline-primary px-4 py-3">     
                    <span>Sign Up</span>
                 </a></p>
                 </Link>  

          </div>
        </div>
      </div>
      <br/>
      <div className="container">
    <div className="row justify-content-center">
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="pricing-entry text-center">
          <div>
            <h3 className="mb-4">Features</h3>
          </div>
          <ul>
            <li>Diagnostic Services</li>
            <li>Professional Consultation</li>
            <li>Tooth Implants</li>
            <li>Surgical Extractions</li>
            <li>Teeth Whitening</li>
          </ul>
        </div>
      </div>
      </div>
    </div>

         
        </div>
      </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

  );
}
export default Role;