import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import './index.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../redux/actionCreator'


const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item


class NavLeft extends Component {

    clickMenuItem = ({ item, key, keyPath }) => {
        const text = item.props.children.props.children
        this.props.action.changeMenuItem(text)
        console.log(this.props)
    }

    render() {
        return (
            <div className="nav-left">
                <Menu mode='vertical' theme='dark' onClick={this.clickMenuItem}>
                    <MenuItem key='首页'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <SubMenu
                        title='订单管理'
                    >
                        <MenuItem key='订单管理'>
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

// 第二个参数 mapActionToProps

export default connect(
    null,
    (dispatch) => ({
        action: bindActionCreators(actionCreators, dispatch)
    })
)(NavLeft)
