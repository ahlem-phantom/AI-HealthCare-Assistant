import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AuthService from "./services/auth.service";
import Router from "./routes";
import alanBtn from "@alan-ai/alan-sdk-web";
import {useNavigate} from 'react-router-dom'

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const alanBtnContainer = useRef();
  const navigate = useNavigate()
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
    alanBtn({
      key: "16e640254ab52f4aa02148c35fd8d1c92e956eca572e1d8b807a3e2338fdd0dc/stage",
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        if (commandData.command === "showHomePage") {
          navigate("/", { replace: true });
        }
        if (commandData.command === "showLoginPage") {
          navigate("/login", { replace: true });
        }
        if (commandData.command === "showSignupPage") {
          navigate("/registration", { replace: true });
        }
        if (commandData.command === "showUploadPage") {
          if(localStorage.getItem("token")){
            navigate("/patient/symptoms", { replace: true });
          }
          else {
            navigate("/login", { replace: true });
          }
        }
    
      },
    });
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
      <div className="App">
        <div className="alan" ref={alanBtnContainer}></div>
      </div>
    </div>
  );
};

export default App;






