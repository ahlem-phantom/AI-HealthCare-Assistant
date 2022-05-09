import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function ResetPassword() {
  const params = useParams();
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios("http://localhost:8080/users/resetPass/" + params.confirmationCode);
      console.log(res.data);
      setUser(res.data);
    };
    getUsers();
  }, []);

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

  const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
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
                  <img src="assets/img/logo-dark.png" alt />
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
