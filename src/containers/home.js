import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, Table} from 'antd';
import {connect} from 'react-redux';

import {getTask} from "../actions/home";

const {Column} = Table;
// const columns = [{
//     title: '排名',
//     dataIndex: 'name',
//     key: 'order',
// }, {
//     title: '任务名称',
//     dataIndex: 'name',
//     key: 'name',
// }, {
//     title: '采集量',
//     dataIndex: 'count',
//     key: 'count',
// }];
const title1 = () => '任务采集量统计';
const title2 = () => '分组采集量统计';

const data1 = [{
    key: '1',
    order1: '1',
    name1: '青岛某社区',
    count1: 1234,
}, {
    key: '2',
    order1: '2',
    name1: '青岛某社区',
    count1: 111,
}, {
    key: '3',
    order1: '3',
    name1: '青岛某社区',
    count1: 3213,
}];

const data2 = [{
    key: '1',
    order2: '1',
    name2: '青岛工商局',
    count2: 1234,
}, {
    key: '2',
    order2: 'Jim 2',
    name2: '南京工商局',
    count2: 111,
}, {
    key: '3',
    order2: '3',
    name2: '重庆工商局',
    count2: 3213,
}];

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('home mount')
    }

    componentWillMount() {
        console.log('componentWillMount start!');
        this.props.getTask();
    }

    render() {
        return (
            <div style={{padding: '30px'}}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="任务总数" bordered={true}>{this.props.allCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="已启用任务" bordered={true}>{this.props.enabledCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="执行中任务" bordered={true}>{this.props.executeCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="休息任务" bordered={true}>{this.props.sleepCount}</Card>
                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col>
                        <Table dataSource={data1} title={title1}
                               pagination={{total: 50, showSizeChanger: true, showQuickJumper: true}}>
                            <Column
                                title="排名"
                                dataIndex="order1"
                                key="order1"
                            />
                            <Column
                                title="任务名称"
                                dataIndex="name1"
                                key="name1"
                            />
                            <Column
                                title="采集量"
                                dataIndex="count1"
                                key="count1"
                            />
                        </Table>
                    </Col>
                    <Col>
                        <Table dataSource={data2} title={title2}
                               pagination={{total: 50, showSizeChanger: true, showQuickJumper: true}}>
                            <Column
                                title="排名"
                                dataIndex="name2"
                                key="order2"
                            />
                            <Column
                                title="任务名称"
                                dataIndex="name2"
                                key="name2"
                            />
                            <Column
                                title="采集量"
                                dataIndex="count2"
                                key="count2"
                            />
                        </Table>
                    </Col>
                </Row>

                <Card title="规则统计" noHovering style={{width: 500}}>
                    <Card.Grid style={{width: '50%',}}>规则总数</Card.Grid>
                    <Card.Grid style={{width: '25%',}}>板块规则</Card.Grid>
                    <Card.Grid style={{width: '25%',}}>帖子规则</Card.Grid>
                </Card>
            </div>
        );
    }
}

Home.propTypes = {
    getTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    // console.log(state);
    const taskData = state.taskData;
    console.log(taskData);

    return {
        allCount: taskData.allCount,
        enabledCount: taskData.enabledCount,
        executeCount: taskData.executeCount,
        sleepCount: taskData.sleepCount,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTask: () => {
            dispatch(getTask());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);