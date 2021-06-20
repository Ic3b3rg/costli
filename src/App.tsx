import React from 'react';
import { Costli } from './components/Costli/Costli';
import { Login } from './components/Login/Login';
import { ProvideAuth } from './components/Auth/ProvideAuth/ProvideAuth'
import {PrivateRoute} from './components/Auth/PrivateRoute/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const App: React.FC = () => {

  return (
    <ProvideAuth>
      <Router>
        <div className="h-screen w-full">
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <PrivateRoute>
              <Costli />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>

  );
}

export default App;