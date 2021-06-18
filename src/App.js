import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Booking} from './components/booking'

import {Home} from './components/Home'
// import {OTP} from './components/OTP'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path = '/booking'>
      <Booking />

        </Route>
      </Switch>
    <div className="App">
    </div>
    </Router>
    </>
  );
}

export default App;
