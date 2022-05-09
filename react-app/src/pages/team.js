import React from 'react';
import Navbar from '../components/navbar';
import team1 from '../assets/ahlem.jpg';
import { useEffect } from 'react';
import Footer from '../components/footer';
function Team() {
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
    <div className="row justify-content-center mb-5 pb-5">
      <div className="col-md-7 text-center heading-section ftco-animate">
        <h2 className="mb-3">Alpha Coders Team</h2>
      </div>
      <div className="row g-10">
      <div className="col-md-4 col-lg-4 ">
        <div className="card bg-light">
          <div className="card-body text-center">
            <img src={team1} style={{width :"300px", height:"250px"}} className=" mb-3" alt />
            <h3 className="card-title mb-3">Ahlem Laajili</h3>
            <p className="card-text">
              WEB DEVElOPER
            </p>
            <br />
            <a href="mailto:ahlem.laajili@esprit.tn"><i className="fa fa-google text-dark mx-1" /></a>
            <a href="https://github.com/ahlem-phantom"><i className="fa fa-github text-dark mx-1" /></a>
            <a href="https://www.linkedin.com/in/ahlem-laajili/"><i className="fa fa-linkedin text-dark mx-1" /></a>
            <a href="https://www.instagram.com/ahlemmajili/"><i className="fa fa-instagram text-dark mx-1" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-4">
        <div className="card bg-light">
        <div className="card-body text-center">
            <img src={team1} style={{width :"300px", height:"250px"}} className=" mb-3" alt />
            <h3 className="card-title mb-3">Syrine Zahras</h3>
            <p className="card-text">
              WEB DEVElOPER
            </p>
            <br />
            <a href="mailto:ahlem.laajili@esprit.t"><i className="fa fa-google text-dark mx-1" /></a>
            <a href="https://github.com/ahlem-phantom"><i className="fa fa-github text-dark mx-1" /></a>
            <a href="https://www.linkedin.com/in/ahlem-laajili/"><i className="fa fa-linkedin text-dark mx-1" /></a>
            <a href="https://www.instagram.com/ahlemmajili/"><i className="fa fa-instagram text-dark mx-1" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-4">
        <div className="card bg-light">
        <div className="card-body text-center">
            <img src={team1} style={{width :"300px", height:"250px"}} className=" mb-3" alt />
            <h3 className="card-title mb-3">Nesrine Ben Mahmoud</h3>
            <p className="card-text">
              WEB DEVElOPER
            </p>
            <br />
            <a href="mailto:ahlem.laajili@esprit.t"><i className="fa fa-google text-dark mx-1" /></a>
            <a href="https://github.com/ahlem-phantom"><i className="fa fa-github text-dark mx-1" /></a>
            <a href="https://www.linkedin.com/in/ahlem-laajili/"><i className="fa fa-linkedin text-dark mx-1" /></a>
            <a href="https://www.instagram.com/ahlemmajili/"><i className="fa fa-instagram text-dark mx-1" /></a>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
    <br /><br />

    </div>
        <div className="row g-10">
      <div className="col-md-4 col-lg-2">
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card bg-light">
        <div className="card-body text-center">
            <img src={team1} style={{width :"300px", height:"250px"}} className=" mb-3" alt />
            <h3 className="card-title mb-3">Skander Turki</h3>
            <p className="card-text">
              WEB DEVElOPER
            </p>
            <br />
            <a href="mailto:ahlem.laajili@esprit.t"><i className="fa fa-google text-dark mx-1" /></a>
            <a href="https://github.com/ahlem-phantom"><i className="fa fa-github text-dark mx-1" /></a>
            <a href="https://www.linkedin.com/in/ahlem-laajili/"><i className="fa fa-linkedin text-dark mx-1" /></a>
            <a href="https://www.instagram.com/ahlemmajili/"><i className="fa fa-instagram text-dark mx-1" /></a>
          </div>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="col-md-4 col-lg-4">
        <div className="card bg-light">
        <div className="card-body text-center">
            <img src={team1} style={{width :"300px", height:"250px"}} className=" mb-3" alt />
            <h3 className="card-title mb-3">Hichem Ben Zammal</h3>
            <p className="card-text">
              WEB DEVElOPER
            </p>
            <br />
            <a href="mailto:ahlem.laajili@esprit.t"><i className="fa fa-google text-dark mx-1" /></a>
            <a href="https://github.com/ahlem-phantom"><i className="fa fa-github text-dark mx-1" /></a>
            <a href="https://www.linkedin.com/in/ahlem-laajili/"><i className="fa fa-linkedin text-dark mx-1" /></a>
            <a href="https://www.instagram.com/ahlemmajili/"><i className="fa fa-instagram text-dark mx-1" /></a>
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

export default Team;