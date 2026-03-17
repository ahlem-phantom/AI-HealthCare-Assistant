import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import logoDark from "../../assets/logo-dark.png";
function ResetPassword() {
  const params = useParams();
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios(`${API_BASE_URL}/users/resetPass/${params.confirmationCode}`);
      console.log(res.data);
      console.log(res.data);
    };
    getUsers();
  }, [params.confirmationCode]);

  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeResetPassword = (e) => {
    const resetPassword = e.target.value;
    setResetPassword(resetPassword);
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
          <div className="account-box">
            <form className="form-signin" action="#">
              <div className="account-logo">
                <a href="index-2.html">
                  <img src={logoDark} alt="Logo" />
                </a>
              </div>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={resetPassword}
                  onChange={onChangeResetPassword}
                />
              </div>
              <div className="col-sm-12 text-center m-t-20">
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
