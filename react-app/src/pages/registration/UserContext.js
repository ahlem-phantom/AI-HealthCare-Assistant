/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default props => {
  
  const [state, setState] = useState({
    user: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      birthdate: new Date().toISOString().slice(0, 10),
      phone: "",
      country: "",
      stat: "",
      city: "",
      street: "",
      zip: "",
      password: "",
      confirmPassword: "",
      role: "",
      bio: "",
      website: "",
      plan:"",
      acceptTerms: false,
      newsletter: false
    },
    errors: {}
  });
  
  return (
    
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
    
  );
};
