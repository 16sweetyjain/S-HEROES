import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';


axios.defaults.baseURL = 'http://localhost:8000/';
ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    ,
    document.getElementById('root')
);
