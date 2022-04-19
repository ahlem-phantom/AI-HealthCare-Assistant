import React from "react";
import { Outlet } from "react-router-dom";
function ResetPassword() {
  return (
    <div className="main-wrapper account-wrapper">
      <div className="account-page">
        <div className="account-center">
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <div className="account-box">
            <form className="form-signin" action="#">
              <div className="account-logo">
                <a href="index-2.html">
                  <img src="assets/img/logo-dark.png" alt />
                </a>
              </div>
              <div className="form-group">
                <label>New Password </label>
                <input type="text" className="form-control" autofocus />
              </div>
              <div className="form-group">
                <label>Confirm New Passwordd</label>
                <input type="text" className="form-control" autofocus />
              </div>
              <div classname="col-sm-12 text-center m-t-20">
                <button className="btn btn btn-primary btn-rounded float-center">
                  {" "}
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
