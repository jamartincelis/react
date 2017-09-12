import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = require("jquery");
require('bootstrap');

ReactDOM.render( <App />, document.getElementById('root'));
registerServiceWorker();
