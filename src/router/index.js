import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Admin from '../views/admin'
import Home from '../views/home'
import Order from '../views/order'
import NotMatch from '../views/notMatch'


export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}/>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        } />
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
