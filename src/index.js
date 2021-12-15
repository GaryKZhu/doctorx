import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './websitelinks/about';
import Registration from './websitelinks/registration';
import ResultsForm from './results/resultsform.js';

const rootElement = document.getElementById("root");
render(
  <App/>,
  rootElement
);