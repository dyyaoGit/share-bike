import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './router'
import './style/common.scss'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router />
        </App>
    </Provider>
    ,
    document.getElementById('root'));

