import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootswatch/dist/morph/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
);

