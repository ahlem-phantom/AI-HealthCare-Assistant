/* eslint-disable react/style-prop-object */
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Map from './map';
import { Icon } from '@iconify/react';
import Form from './form';
import Info from './info';

import './contact-section.css';

function Contact() {

  
  const location = {
    address: 'Esprit El Ghazela Tunis',
    lat: 36.8763301,
    lng: 10.1807251,
  }

  const formInputs = [
    { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
    {
      id: 'tel',
      type: 'tel',
      label: 'Phone number',
      placeholder: '+01 234 567 8900',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email address',
      placeholder: 'you@example.com',
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Your message',
      placeholder: 'How can we help you? Or you us?',
    },
  ]
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

        </div>
      </div>
    </div>
  </div>
</section>

<div className="contact-section">
      <Form />
      <Info />
    </div>


<Map location={location} zoomLevel={17} />
  <Footer />
</div>

  );
}
export default Contact;