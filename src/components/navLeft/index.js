import React, { Component } from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'
import './index.scss'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item


export default class NavLeft extends Component{
    render() {
        return (
            <div className="nav-left">
                <Menu mode='vertical' theme='dark'>
                    <MenuItem key='/admin/home'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <MenuItem key='/admin/order'>
                        <Link to='/admin/order'>订单管理</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}
