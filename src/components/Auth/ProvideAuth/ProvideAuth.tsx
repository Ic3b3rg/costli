import React, { createContext, useState } from "react";
import { graphQLClient } from "../../../requestsQL/gql-client";

export const authContext = createContext({
  user: "",
  isAuthenticated: sessionStorage.getItem('token') ? true : false,
  signin: (cb: any) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout: (cb: any) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
});


export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb: any) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: any) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    isAuthenticated: fakeAuth.isAuthenticated,
    signin,
    signout
  };
}

const fakeAuth = {
  isAuthenticated: sessionStorage.getItem('token') ? true : false,
  signin(cb: any) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};