import React,{Component} from 'react'
import {Card} from 'antd'
import echarts from 'echarts/lib/echarts'
import echartsTheme from '../echartTheme'
//引入bar模块
import 'echarts/lib/chart/bar'
// 引入组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react'


export default class Bar extends Component{

    componentWillMount() {
        echarts.registerTheme('dyyao', echartsTheme)
        this.renderBar1()
        this.renderBar2()
    }

    renderBar1 = () => {
        this.options1 = {
            title: {
                text: 'OFO周订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                }
            ]
        }
    }

    renderBar2 = ()=> {
        this.options2 = {
            title: {
                text: '用户骑行订单'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            legend: {
                data: ['OFO','摩拜', '小蓝单车']
            },
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'OFO',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [600, 1200, 1800, 5000, 6000, 8000, 10000]
                },
                {
                    name: '小蓝单车',
                    type: 'bar',
                    data: [300, 600, 800, 1800, 2000, 1500, 1000]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card
                    title="柱形图表一"
                >
                    <ReactEcharts option={this.options1} theme='dyyao'></ReactEcharts>
                </Card>
                <Card title='柱形图表二' style={{marginTop: 20}}>
                    <ReactEcharts option={this.options2} theme='dyyao'></ReactEcharts>
                </Card>
            </div>
        )
    }
}
