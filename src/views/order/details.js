import React,{Component} from 'react'
import Header from '../../components/header'
import './details.scss'
import {Card} from 'antd'
import axios from '../../axios'

export default class Details extends Component{
    state = {
        orderInfo: {}
    }

    componentDidMount() {
        this.getDetailInfo()
    }

    getDetailInfo = () => {
        const id = this.props.match.params.id
        axios.get(`/order/detail`, {id: 1}).then(res => {
            if(res.code == 0){
                this.initMap(res.result)
                this.setState({
                    orderInfo: res.result
                })
            }
        })
    }

    initMap = (result)=> {
        this.map = new window.BMap.Map("map-container");
        // 创建地图实例
        let point = new window.BMap.Point(result.position_list[0].lon, result.position_list[0].lat);
        // 创建点坐标
        this.map.centerAndZoom(point, 11);
        //添加控件
        this.addMapControl()
        //绘制折线图
        this.drawBikeRoute(result.position_list)
        //绘制服务区
        this.drawServiceArea(result.area)
    }

    addMapControl = () => {
        //添加缩放和导航控件
        this.map.addControl(new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
        //添加比例尺控件
        this.map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
    }

    drawBikeRoute = (position_list) => {
        const map = this.map
        const BMap = window.BMap
        const startPoint = position_list[0]
        const endPoint = position_list[position_list.length-1]
        //生成起始坐标点
        const startMapPoint = new window.BMap.Point(startPoint.lon, startPoint.lat)
        const startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36,42)
        });
        // 生成结束坐标点
        const endMapPoint = new window.BMap.Point(endPoint.lon, endPoint.lat)
        const endIcon = new BMap.Icon("/imgs/end_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36,42)
        });
        //设置坐标点
        const startMarker = new window.BMap.Marker(startMapPoint, {icon: startIcon})
        const endMarker = new window.BMap.Marker(endMapPoint,{icon: endIcon})
        map.addOverlay(startMarker)
        map.addOverlay(endMarker)
        //生成折线图

        let polylineArr = position_list.map(point => {
            return new BMap.Point(point.lon, point.lat)
        })
        console.log(polylineArr)
        const polyline = new BMap.Polyline(polylineArr,
            {strokeColor:"#1869AD", strokeWeight:3, strokeOpacity:1}
        );
        map.addOverlay(polyline);
    }

    drawServiceArea = (area) => {
        const BMap = window.BMap
        const map = this.map

        let serviceArr = area.map(point => {
            return new BMap.Point(point.lon, point.lat)
        })

        const polygon = new BMap.Polygon(serviceArr, {
            strokeColor: '#ff0000',
            fillColor: '#ff6700',
            fillOpacity: 0.5
        })

        map.addOverlay(polygon)


    }

    render() {
        const info = this.state.orderInfo

        return (
            <div className='order-detail'>
                <Header type='common'></Header>
                <Card>
                    <div className="map-wrap" id="map-container"></div>
                    <div className="detail-info">
                        <div className="item-title">
                            基础信息
                        </div>
                        <ul>
                            <li>
                                <span className="info-left">用车模式</span>
                                <span className="info-right">{info.mode == 1 ? '服务区': '停车点'}</span>
                            </li>
                            <li>
                                <span className="info-left">订单编号</span>
                                <span className="info-right">{info.order_sn}</span>
                            </li>
                            <li>
                                <span className="info-left">车辆编号</span>
                                <span className="info-right">{info.bike_sn}</span>
                            </li>
                            <li>
                                <span className="info-left">用户姓名</span>
                                <span className="info-right">{info.user_name}</span>
                            </li>
                            <li>
                                <span className="info-left">手机号码</span>
                                <span className="info-right">{info.mobile}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-info">
                        <div className="item-title">
                            行驶轨迹
                        </div>
                        <ul className='info-wrap'>
                            <li>
                                <span className="info-left">行程起点</span>
                                <span className="info-right">{info.start_location}</span>
                            </li>
                            <li>
                                <span className="info-left">行程终点</span>
                                <span className="info-right">{info.end_location}</span>
                            </li>
                            <li>
                                <span className="info-left">行驶里程</span>
                                <span className="info-right">{info.distance/1000 + 'KM'}</span>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }
}
