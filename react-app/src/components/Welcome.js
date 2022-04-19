import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
const Welcome = (props) => {
  const params = useParams();
    AuthService.verifyUser(params.confirmationCode);
  

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <Link to={"/login"} className="nav-link">
        Please Login
      </Link>
    </div>
  );
};

export default Welcome;
