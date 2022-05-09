import React, { useEffect } from 'react';
import './chat.css';
import './button.css';



function Symptoms() {


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
    [...document.getElementsByClassName("alan")].map(n => n && n.remove());
   loadScript(`https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1`)
  
    })

    


    return (
      <div className="main-wrapper">
 
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
          <div className="col-md-12">
      <div className="card-box">
        <h4 className="card-title">Welcome To Symptoms Detection!</h4>

        <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h1 className="mb-3"><strong> Discover Our Most Visited Specialists </strong></h1>
          <p>To help find a suitable doctor for you, please click to the ChatBot below right of the page, and provide us with your Symptoms. ⇘⇘⇘</p>
        </div>
      </div>

      <div className="row">
        

        <div className="col-md-4">
  <div className="card">
    <img className="card-img-top" src={process.env.PUBLIC_URL + './images/generalist.jpg'} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title border-bottom pb-3">Generalist <a href="#" className="float-right btn btn-sm btn-info d-inline-flex share"><i className="fas fa-share-alt" /></a></h5>
      <p className="card-text">An internist, family physician, or pediatrician who performs general medicine; one who treats most diseases that do 
      not require surgery, sometimes including those related to obstetrics.</p>
    </div>
  </div>
</div>


<div className="col-md-4">
  <div className="card">
    <img className="card-img-top" src={process.env.PUBLIC_URL + './images/dermo.jpg'} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title border-bottom pb-3"> Dermatologist <a href="#" className="float-right btn btn-sm btn-info d-inline-flex share"><i className="fas fa-share-alt" /></a></h5>
      <p className="card-text">A dermatologist is a doctor who specializes in conditions involving the skin, hair, and nails.
       A dermatologist can identify and treat more than 3,000 conditions. </p>
    </div>
  </div>
</div>


<div className="col-md-4">
  <div className="card">
    <img className="card-img-top" src={process.env.PUBLIC_URL + './images/orl.jpg'} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title border-bottom pb-3"> Otolaryngologist <a href="#" className="float-right btn btn-sm btn-info d-inline-flex share"><i className="fas fa-share-alt" /></a></h5>
      <p className="card-text">An otolaryngologist is a doctor that specializes in treating conditions that affect the ears, nose, and throat, as well as head and neck surgery. 
      In addition to being a medical doctor, an otolaryngologist is also a surgeon.  </p>
    </div>
  </div>
</div>

  

      </div>
      <div className="row  mt-5 justify-conten-center">
        <div className="col-md-8 ftco-animate">
        </div>
      </div>
    </div>

    
    <df-messenger
  intent="WELCOME"
  chat-title="Specialist Guidance"
  agent-id="d46dffb7-6992-4c58-92f0-a5d7561e4700"
  language-code="en"
></df-messenger>
  </section>

      
                </div>
              </div>
    
          </div>
         
        </div>
      </div>
    </div>
    
    
    );
}


export default Symptoms;