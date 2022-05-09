import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { UserContext } from "./UserContext";

function CardVerification() {
  const [state] = useContext(UserContext);
  const { user } = state;
    const [img, setImg] = useState("");
  const [file, setFile] = useState("");
  const [res, setRes] = useState([]);
  let final;
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImg(URL.createObjectURL(file));
  };
 
  const handleAdd = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("file", file);
    axios
      .post(
        "https://app.nanonets.com/api/v2/OCR/Model/4c7455eb-fc31-4c53-b945-d5e8701f763a/LabelFile/",
        data, //proxy uri
        {
          headers: {
            authorization: "Basic Z2VDS202eGR3VG03VlBMeVR4LU1YelNUVmVzSXR4ZmU6",
            accept: "application/json",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        }
      )
      .then(function (body) {
        setRes(body.data.result);
        console.log(body.data);
        console.log(body.data.result);
      });
  };

  const successhandler = (e) => {
    window.location.href='/face-reg';
    user.role='doctor';
  };

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
        <h2 className="mb-3">Identity Verification</h2>
        <div>
           <b> Please select your card id to verify your identity</b>
      <form onSubmit={handleAdd}>
      <img src={img} alt="" width="710px"/>
        <input type="file" className="form-control" onChange={onChangeFile} />
        <br></br>
        <button className="btn btn-primary submit-btn">Verify Card Id</button>
      </form>
      {res.map((prediction, index) => {
        return <>

        {
            prediction.prediction.map((id, index) => {
                return <div>
                <li key={index}>
                  {id.label} : <br></br> <b>Extracted Text : </b> {id.ocr_text} <br></br><b>Prediction:</b> {id.score} <br></br> {(() => {
        if (id.score >0.5) {
            final="success";
          return (
            <div><b>Result :</b> success</div>
          )
        } else {
            final="failure";
          return (
            <div><b>Result :</b> failure</div>
          )
        }
      })()}
                </li>
                <br></br>
                </div>;
              })
        }
        </>;
      })}
      </div>
      {(() => {
        if (final==='success')
         {
          return (
            <button className="btn btn-success submit-btn" onClick={successhandler}>Success</button>

          )
        } else if (final==='failure') {
          return (
            <button className="btn btn-warning submit-btn"><b>Failure</b></button>
          )
        }
      })()}
    </div>
    </div>
    </div>
    </section>
    <Footer />
    </div>
  );
}

export default CardVerification;
