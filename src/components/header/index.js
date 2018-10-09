import React,{Component} from 'react'
import './index.scss'
import jsonp from 'jsonp'

export default class Header extends Component{
    getWeather = () => {
        let area = encodeURIComponent('北京')
        jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${area}&output=json&ak=wQlEyR29jvlIEWrdKxd5inASjYugOCam`, {
            param: 'callback'
        },
            (res) => {
                console.log(res);
            })
    }

    componentWillMount() {
        console.log(1)
        this.getWeather()
    }

    render() {
        return (
            <div className='header-wrap'>
                <div className='header'>
                    <div className='logout flr'>
                        退出
                    </div>
                    <div className="user-wrap flr">
                        欢迎， <span className="username">张怡宁</span>
                    </div>
                </div>
                <div className='header-detail'>
                    <div className="breadcrumb-title fll">
                        首页
                    </div>
                    <div className="weather">
                        <div className="date">
                            2018-01-09 06:02:18
                        </div>
                        <div className="weather-detail">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
