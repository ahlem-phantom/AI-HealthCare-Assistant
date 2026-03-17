import React from "react";
// components
import RegisterForm from "./index";
//CONTEXT
import UserContextProvider from "./UserContext";

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <UserContextProvider>
      <RegisterForm />
    </UserContextProvider>
  );
}
