import React from "react";
import AuthService from "../../services/auth.service";
import { useParams, useNavigate } from "react-router-dom";
import successIcon from "../../assets/success.png";
const Welcome = (props) => {
  const params = useParams();
    AuthService.verifyUser(params.confirmationCode);
    const mystyle = {
      height : "150px",
      width : "150px",
      alignSelf: 'center',
     };

     const navigate = useNavigate();
     const loginhandler = (e) => {
      navigate('/login');
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
            <img src={successIcon} style={mystyle} alt="Success" />
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
