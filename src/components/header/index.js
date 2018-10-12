import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'
import utils from '../../utils'
import {connect} from 'react-redux'

class Header extends Component{
    state = {
        weather: '',
        time: ''
    }

    getWeather = () => {
        axios.get(`http://t.weather.sojson.com/api/weather/city/101010100`).then(res => {
            let weatherData = res.data.data.forecast[0]
            let weatherStr = `${weatherData.low} ~ ${weatherData.high} ${weatherData.fx} ${weatherData.fl}`
            this.setState({weather: weatherStr})
})
    }

    getDate() {
        setInterval(() => {
            let unixDate = new Date().getTime()
            let time = utils.formatDate(unixDate)
            this.setState({
                time
            })
        }, 1000)
    }

    componentWillMount() {
        this.getWeather()
        this.getDate()
        console.log(this.props)
    }

    render() {
        return (
            <div className='header-wrap clearfix'>
                <div className={this.props.type == 'common' ? 'common-header clearfix' : 'header clearfix'} >
                    <h2 className="title fll" style={{color: '#fff', marginLeft: '20px'}}>
                        共享单车后台系统
                    </h2>
                    <div className='logout flr'>
                        退出
                    </div>
                    <div className="user-wrap flr">
                        欢迎， <span className="username">张怡宁</span>
                    </div>
                </div>
                {
                    this.props.type == 'common' ? '' :
                <div className='header-detail clearfix'>
                    <div className="breadcrumb-title fll">
                        {this.props.menuText.menuItemText}
                    </div>
                    <div className="weather flr clearfix">
                        <div className="date fll">
                            {this.state.time}
                        </div>
                        <div className="weather-detail fll">
                            {this.state.weather}
                        </div>
                    </div>
                </div>
                }


            </div>
        )
    }
}

// export default connect(
//     state => (
//         {
//             menuItemText: state.menuItemText
//         }
//     )
// )(Header)

//connect 接受两个参数，一个参数叫做mapStateToProps, 另一个参数叫mapActionToProps,
// 这两个参数都应该是一个函数

export default connect(
    function mapStateToProps(state){
        return {
            menuText: state
        }
    }
)(Header)