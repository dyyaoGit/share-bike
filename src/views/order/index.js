import React,{Component} from 'react';
import {Card, Form, Input, Button, Select, DatePicker} from 'antd'
const { RangePicker } = DatePicker;
const FormItem = Form.Item
const Option = Select.Option


class Order extends Component {
    constructor(props) {
        super(props)
    }

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

    timeChange = () => {

    }

    render() {
        return (
            <div className="order-wrap">
                <Card>
                    <Form layout='inline'>
                        <FormItem label='城市'>
                            <Select placeholder='请选择一个城市'>
                                {this.cityData.map(item =>
                                    <Option value={item.id} key={item.id}>{item.label}</Option>
                                )}
                            </Select>
                        </FormItem>
                        <FormItem label='订单时间'>
                            <RangePicker onChange={this.timeChange}></RangePicker>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )

    }
}

export default Order