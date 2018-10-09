import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './router'
import './style/common.scss'

ReactDOM.render(
    <App>
        <Router />
    </App>,
    document.getElementById('root'));

