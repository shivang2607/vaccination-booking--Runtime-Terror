// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Booking} from './components/booking'
import {Header} from './components/Header'
import {OTP} from './components/OTP'
 
function App() {
  return (
    
    <div className="App">
      <Header className="App-header"/>
      <Booking />
      {/* {console.log(items)} */}
      {/* <OTP/> */}
    </div>
  );
}

export default App;
