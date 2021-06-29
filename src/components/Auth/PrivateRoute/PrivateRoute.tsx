// A wrapper for <Route> that redirects to the login

import React, { useContext } from "react";

import {
  Route,
  Redirect,
} from "react-router-dom";
import { authContext } from '../ProvideAuth/ProvideAuth';



// screen if you're not yet authenticated.
export const PrivateRoute: React.FC = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated
          ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function useAuth() {
  return useContext(authContext);
}

