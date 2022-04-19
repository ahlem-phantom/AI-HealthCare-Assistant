import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AuthService from "./services/auth.service";
import Router from "./routes";
import Navbar from "./components/navbar";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
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

    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);


  return (
    <div>

      <Router />

    </div>
  );
};

export default App;






