import React, { Component } from 'react'
import {HashRouter, Route} from 'react-router-dom'
import './index.scss'
import {Row, Col} from 'antd'
import NavLeft from '../../components/navLeft'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default class Admin extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="admin">
                <Row>
                    <Col span={4} className="nav-left-wrap">
                        <NavLeft />
                    </Col>
                    <Col span={20} style={{height: '100vh',overflow: 'auto'}}>
                        <Header/>
                        <div className="content-wrap" >
                            <div className="content" >
                                {this.props.children}
                            </div>
                        </div>
                        <Footer />
                    </Col>
                </Row>
            </div>
        )
    }
}
