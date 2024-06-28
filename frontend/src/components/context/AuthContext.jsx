import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    try {
      const { res } = await axios.get("https://localhost:5000/api/loggedIn");
      const data = await res.data;
      console.log(data);
      // return data;
      setLoggedIn(data);
    } catch (error) {
      setLoggedIn(null);
    }
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
