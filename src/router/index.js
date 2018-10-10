import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Admin from '../views/admin'
import Home from '../views/home'
import Order from '../views/order'
import NotMatch from '../views/notMatch'
import OrderDetails from '../views/order/details'
import Bar from '../views/echarts/bar'
import Pie from '../views/echarts/pie'


export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/common/order/detail/:id' component={OrderDetails}></Route>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}/>
                                    <Route path='/admin/echarts/bar' component={Bar}/>
                                    <Route path='/admin/echarts/pie' component={Pie}/>
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
