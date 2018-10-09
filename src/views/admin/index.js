import React, { Component } from 'react'
import {Row, Col} from 'antd'
import NavLeft from '../../components/navLeft'
import Header from '../../components/header'

export default class Admin extends Component {

    menuData = [
        {
            path: '/home'
        }
    ]

    render() {
        return (
            <div className="admin">
                <Row>
                    <Col span={4}>
                        <NavLeft />
                    </Col>
                    <Col span={20}>
                        <Header/>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>



            </div>
        )
    }
}
