/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModalLogin = () => {
    setModal(!modal);
  };

  return (
    <LoginContext.Provider value={{ modal, toggleModalLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
