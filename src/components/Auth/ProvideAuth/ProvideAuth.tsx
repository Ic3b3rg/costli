import React, { createContext, useState } from "react";

export const authContext = createContext({
  user:'',
  signin: (cb:any)=> {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout:(cb:any)=> {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
});


export const  ProvideAuth:React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signin = (cb:any) => {
      return fakeAuth.signin(() => {
        setUser("user");
        cb();
      });
    };
  
    const signout = (cb:any) => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }

  const fakeAuth = {
    isAuthenticated: false,
    signin(cb:any) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
      console.log(this.isAuthenticated)
    },
    signout(cb:any) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };