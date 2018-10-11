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
                    <SubMenu
                        title='订单管理'
                    >
                        <MenuItem key='/admin/order'>
                            <Link to='/admin/order'>订单管理</Link>
                        </MenuItem>
                        <MenuItem key='/admin/order_demo'>
                            <Link to='/admin/order_demo'>订单管理demo</Link>
                        </MenuItem>

                    </SubMenu>

                    <SubMenu title='图例'>
                        <MenuItem key='/admin/echarts/bar'>
                            <Link to='/admin/echarts/bar'>条形图</Link>
                        </MenuItem>
                        <MenuItem key='/admin/echarts/bar_demo'>
                            <Link to='/admin/echarts/bar_demo'>条形图demo</Link>
                        </MenuItem>
                        <MenuItem key='/admin/echarts/pie'>
                            <Link to='/admin/echarts/pie'>饼状图</Link>
                        </MenuItem>
                        <MenuItem key='/admin/echarts/pie_demo'>
                            <Link to='/admin/echarts/pie_demo'>饼状图demo</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
