import React, { Component } from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'

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
                </Menu>
            </div>
        )
    }
}
