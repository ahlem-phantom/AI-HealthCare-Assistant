import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
const Welcome = (props) => {
  const params = useParams();
    AuthService.verifyUser(params.confirmationCode);
    const mystyle = {
      height : "150px",
      width : "150px",
      alignSelf: 'center',
     };

     const loginhandler = (e) => {
      window.location.href='/login';
    };

  return (
    <div className="main-wrapper account-wrapper">
    <div className="account-page">
      <div className="account-center">
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <div className="account-box" style={{width : "900px" }} >


            <div className="account-logo" style={{width : "900px"}}>
            <img src="assets/img/success.png" style={mystyle} />
<br /><br /><br />
            <p style={{ fontSize : "20px" , color : 'black'}}>Your email has been confirmed</p>
            <br /><br /><br />
            <button className="btn btn btn-primary btn-rounded float-center" style={{fontSize : '25px'}} onClick={loginhandler}>
                {" "}
                &nbsp;&nbsp; &nbsp; &nbsp;Login &nbsp; &nbsp; &nbsp;
             </button>
            </div>
            <div className="col-sm-12 text-center m-t-20">
         
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Welcome;
