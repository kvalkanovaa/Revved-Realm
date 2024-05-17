import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Cars from './components/Cars/Cars';
import Vans from './components/Vans/Vans';
import Motorcycles from './components/Motorcycles/Motorcycles';
import OtherVehicles from './components/OtherVehicles/OtherVehicles';
import About from './components/About/About';

import './App.css';

import Parse from 'parse/dist/parse.min.js';
import Home from './components/Home/Home';

function NotFound() {
  return <h1>404 Not Found</h1>;
}

const PARSE_APPLICATION_ID = 'zGhlCvGoaMHN2tWoQt3fIN4Ta1tYPaaZObwaAAqR';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '4JOaaym3W4WxVdIiZbcw0tIBwucnC5kcM2lgAbHo';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cars"
          element={<Cars />}
        />
        <Route
          path="/vans"
          element={<Vans />}
        />
        <Route
          path="/motorcycles"
          element={<Motorcycles />}
        />
        <Route
          path="/other-vehicles"
          element={<OtherVehicles />}
        />
        <Route
          path="/about-us"
          element={<About />}
        />
      </Routes>
    </Router>
  );
};

export default App;
