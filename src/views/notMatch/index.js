import React,{Component} from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import './index.scss'
import notFoundImg from './img.gif'

export default class NotMatch extends Component{


    render() {
        return (
            <div className='not-found clearfix'>
                <div className='not-found-left fll'>
                    <div className="title">
                        Oh My God!
                    </div>
                    <h2 className="desc">
                       404 您要的页面没有找到！
                    </h2>
                    <div className="not-found-content">
                        <p>如有不满，请联系你的领导</p>
                        <ul>
                            <li>或者你可以去</li>
                            <li><Link to="/admin/home">回首页</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='img-wrap fll'>
                    <img src={notFoundImg} />
                </div>
            </div>
        )
    }
}
