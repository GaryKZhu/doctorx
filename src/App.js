import React, {Component} from 'react';
import AppCSS from './App.css';
import {
  NavLink, Routes, Route,BrowserRouter,
} from "react-router-dom";

import About from './websitelinks/about';
import Registration from './websitelinks/registration';
import ResultsForm from './results/resultsform.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <body classname = {AppCSS}>
          <div class = "header"> 
          <h2 id = "title"><a href=".">Doctor-X</a></h2> 
          <nav id = "nav">
              <ul>
                <li><a href=".">Home</a></li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/results">My Results</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li >
                  <NavLink to="/registration">Register</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </body>
        <Routes>
          <Route path="/results" element={<ResultsForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;