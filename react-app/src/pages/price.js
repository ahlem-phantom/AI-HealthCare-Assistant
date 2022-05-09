/* eslint-disable react/style-prop-object */
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
function Price() {

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
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Pricing</span></p>
          <h1 className="mb-3 navbar-brand" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Pricing <span style={{ fontWeight : 'bold'  }}>Nearest</span><span style={{color : 'blue', fontWeight : 'bold' }}>Doctor</span></h1>

        </div>
      </div>
    </div>
  </div>
</section>

<section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-5">
      <div className="col-md-7 text-center heading-section ftco-animate">
        <h2 className="mb-3">Our Best Pricing</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 ftco-animate">
        <div className="pricing-entry pb-5 text-center">
          <div>
            <h3 className="mb-4">Basic</h3>
            <p><span className="price">$24.50</span> <span className="per">/ session</span></p>
          </div>
          <ul>
            <li>Diagnostic Services</li>
            <li>Professional Consultation</li>
            <li>Tooth Implants</li>
            <li>Surgical Extractions</li>
            <li>Teeth Whitening</li>
          </ul>
          <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
        </div>
      </div>
      <div className="col-md-3 ftco-animate">
        <div className="pricing-entry pb-5 text-center">
          <div>
            <h3 className="mb-4">Standard</h3>
            <p><span className="price">$34.50</span> <span className="per">/ session</span></p>
          </div>
          <ul>
            <li>Diagnostic Services</li>
            <li>Professional Consultation</li>
            <li>Tooth Implants</li>
            <li>Surgical Extractions</li>
            <li>Teeth Whitening</li>
          </ul>
          <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
        </div>
      </div>
      <div className="col-md-3 ftco-animate">
        <div className="pricing-entry active pb-5 text-center">
          <div>
            <h3 className="mb-4">Premium</h3>
            <p><span className="price">$54.50</span> <span className="per">/ session</span></p>
          </div>
          <ul>
            <li>Diagnostic Services</li>
            <li>Professional Consultation</li>
            <li>Tooth Implants</li>
            <li>Surgical Extractions</li>
            <li>Teeth Whitening</li>
          </ul>
          <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
        </div>
      </div>
      <div className="col-md-3 ftco-animate">
        <div className="pricing-entry pb-5 text-center">
          <div>
            <h3 className="mb-4">Platinum</h3>
            <p><span className="price">$89.50</span> <span className="per">/ session</span></p>
          </div>
          <ul>
            <li>Diagnostic Services</li>
            <li>Professional Consultation</li>
            <li>Tooth Implants</li>
            <li>Surgical Extractions</li>
            <li>Teeth Whitening</li>
          </ul>
          <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
        </div>
      </div>
    </div>
  </div>
</section>


  <Footer />
</div>

  );
}
export default Price;