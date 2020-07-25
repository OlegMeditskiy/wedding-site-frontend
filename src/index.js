import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App?v1';
import registerServiceWorker from './service-worker';
import {BrowserRouter as Router} from 'react-router-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
