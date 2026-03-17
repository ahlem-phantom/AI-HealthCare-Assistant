import React, { useEffect, useRef} from "react";

import AuthService from "./services/auth.service";
import Router from "./routes";
import alanBtn from "@alan-ai/alan-sdk-web";
import {useNavigate} from 'react-router-dom'

const App = () => {
  const alanBtnContainer = useRef();
  const navigate = useNavigate()
  const alanBtnInitialized = useRef(false);

  useEffect(() => {
    if (alanBtnInitialized.current) return;
    alanBtnInitialized.current = true;

    alanBtn({
      key: process.env.REACT_APP_ALAN_AI_KEY,
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        if (commandData.command === "showHomePage") {
          navigate("/", { replace: true });
        }
        if (commandData.command === "showLoginPage") {
          navigate("/login", { replace: true });
        }
        if (commandData.command === "showSignupPage") {
          navigate("/role", { replace: true });
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

    const user = AuthService.getCurrentUser();

    if (user) {
      // Logic for boards removed as showModeratorBoard/showAdminBoard are unused in this component
    }
  }, [navigate]);


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






