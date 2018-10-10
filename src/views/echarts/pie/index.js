import React,{Component} from 'react'
import {Card} from 'antd'
import echarts from 'echarts/lib/echarts'
import lightTheme from '../themeLight'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

import ReactEcharts from 'echarts-for-react'



export default class Pie extends Component{

    componentWillMount() {
        echarts.registerTheme('huashan', lightTheme)
        this.renderPie1()
        this.renderPie2()
    }

    renderPie1 =()=> {
        this.options1 = {
            title : {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                data: ['周一','周二','周三','周四','周五', '周六', '周日'],
                top: 20,
                right: 20
            },
            tooltip: {
                trigger: 'item'
            },
            series : [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius : '60%',
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:2000, name:'周三'},
                        {value:1800, name:'周四'},
                        {value:2700, name:'周五'},
                        {value:5000, name:'周六'},
                        {value:10000, name:'周日'},
                    ]
                }
            ]
        }
    }

    renderPie2 =()=> {
        this.options2 = {
            title : {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                data: ['周一','周二','周三','周四','周五', '周六', '周日'],
                top: 20,
                right: 20
            },
            tooltip: {
                trigger: 'item'
            },
            series : [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius : ['60%', '80%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:2000, name:'周三'},
                        {value:1800, name:'周四'},
                        {value:2700, name:'周五'},
                        {value:5000, name:'周六'},
                        {value:10000, name:'周日'},
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card title='饼状图一'>
                    <ReactEcharts option={this.options1} theme='huashan'></ReactEcharts>
                </Card>
                <Card title='饼状图二'>
                    <ReactEcharts option={this.options2} theme='huashan'></ReactEcharts>
                </Card>
            </div>
        )
    }
}
