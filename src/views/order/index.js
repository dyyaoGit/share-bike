import React,{Component} from 'react';
import {Card, Form, Input, Button, Select, DatePicker, Table, Modal, message} from 'antd'
import axios from '../../axios'
import './index.scss'
const { RangePicker } = DatePicker;
const FormItem = Form.Item
const Option = Select.Option


class FilterForm extends Component{
    constructor(props) {
        super(props)
    }

    orderData = [
        {
            label: '全部',
            id: 0
        },
        {
            label: '进行中',
            id: 1
        },
        {
            label: '结束行程',
            id: 2
        }
    ]

    cityData = [
        {
            label: '北京',
            id: '0'
        },
        {
            label: '上海',
            id: '1'
        },
        {
            label: '广东',
            id: '2'
        }
    ]

    handleClick = ()=> {
        this.props.form.resetFields()
    }

    handleSearch = () => {
        const form = this.props.form.getFieldsValue()
        console.log(form);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

       return (
           <Form layout='inline'>
               <FormItem label='城市'>
                   {getFieldDecorator('city')(
                   <Select placeholder='请选择一个城市' style={{width: 180}}>
                       {this.cityData.map(item =>
                           <Option value={item.id} key={item.id}>{item.label}</Option>
                       )}
                   </Select>
                   )}

               </FormItem>
               <FormItem label='订单时间'>
                   {getFieldDecorator('orderTime')(
                       <RangePicker></RangePicker>
                   )}
               </FormItem>
               <FormItem label='订单状态'>
                   {
                       getFieldDecorator('status')(
                           <Select placeholder='请选择一个状态' onChange={this.handleChange} style={{width: 180}}>
                               {this.orderData.map(item =>
                                   <Option value={item.id} key={item.id}>{item.label}</Option>
                               )}
                           </Select>
                       )
                   }
               </FormItem>
               <div className="btn-wrap">
                   <Button type='primary' onClick={this.handleSearch}>
                       查询
                   </Button>
                   <Button onClick={this.handleClick}>
                       重置
                   </Button>
               </div>
           </Form>
       )
    }
}
const FilterFormWrap = Form.create()(FilterForm)



class Order extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        tableData: [],
        pagination: {
            total: 0,
            pageSize: 10,
            current: 1
        },
        pn: 1,
        loading: {
            spinning: true,
            tip: '数据正在拼命加载中',
            size: 'large'
        },
        selectedRowKeys: [],
        endItem: {}
    }

    // 表单提交
    timeChange = () => {

    }

    // 表格数据获取
    getTable = ()=> {
        let params = {
            page: this.state.pn
        }

        this.setState({
            loading: {
                ...this.state.loading,
                spinning: true
            }
        })

        axios.get('/order/list', params).then(res => {
            if(res.code == 0){
                this.setState({
                    tableData: res.result.item_list.map((item, index) => {
                        item.key = index
                        return item
                    }),
                    pagination: {
                        total: res.result.total_count,
                        current: this.state.pn,
                        pageSize: 10,
                        onChange: (page) => {
                            console.log(page)
                            this.setState({
                                pn: page
                            }, () => this.getTable()
                            )

                        }
                    },
                    loading: {
                        ...this.state.loading,
                        spinning: false
                    }
                })
            }
        })
    }

    componentWillMount() {
        this.getTable()
    }

    rowSelected(index, data) {
        this.setState({
            selectedRowKeys: index,
            selectedItem: data
        })
    }

    showDetail =() => {
        let {selectedItem} = this.state
        if(selectedItem){
            const id = this.state.selectedItem.id
            window.open(`/#/common/order/detail/${id}`, '_blank')
        } else {
            Modal.info({
                title: '提示',
                content: '请选择一个订单'
            })
        }
    }

    handleDone = () => {
        if(!this.state.selectedItem) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单结束',
                onOk(){},
            })
        } else {
            axios.get('/order/ebike_info').then(res => {
                if(res.code == 0){
                    this.setState({
                        endItem: res.result,
                        visible: true
                    })
                }
            })
        }
    }

    handleEnd = () => {
        axios.get('/order/finish_order', this.state.endItem.id).then(res => {
            if(res.code == 0){
                this.setState({
                    visible: false
                })
                this.getTable()
                message.success('成功结束订单')
            }
        })
    }

    render() {
        const tableColumns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]

        const rowSelection = {
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRow) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedItem: selectedRow
                })
            }
        }

        return (
            <div className="order-wrap">
                <Card>
                    <FilterFormWrap></FilterFormWrap>
                </Card>
                <Card className='btn-wrap' style={{marginTop: -1}}>
                    <Button type='primary' onClick={this.showDetail}>订单详情</Button>
                    <Button type='primary' onClick={this.handleDone}>结束订单</Button>
                </Card>
                <Card style={{marginTop: -1}}>
                    <Table
                        bordered
                        loading={this.state.loading}
                        rowSelection={rowSelection}
                        dataSource={this.state.tableData}
                        columns={tableColumns}
                        onRow={(row, index) => {
                            return {
                                onClick: () => {
                                    this.rowSelected([index], row)
                                }
                            }
                        }}
                        pagination={this.state.pagination}
                    ></Table>
                </Card>
                <Modal
                    title='结束订单'
                    visible={this.state.visible}
                    onOk={this.handleEnd}
                    onCancel={() => this.setState({visible: false})}
                >
                    <ul className='ul-data'>
                        <li>
                            <span className='car-num li-title'>车辆编号：</span>
                            {this.state.endItem.bike_sn}
                        </li>
                        <li>
                            <span className='car-num li-title'>剩余电量：</span>
                            {this.state.endItem.battery}
                        </li>
                        <li>
                            <span className='car-num li-title'>行程开始时间：</span>
                            {this.state.endItem.start_time}
                        </li>
                        <li>
                            <span className='car-num li-title'>当前位置：</span>
                            {this.state.endItem.location}
                        </li>

                    </ul>
                </Modal>
            </div>
        )

    }
}

export default Order
