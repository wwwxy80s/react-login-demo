import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Row, Col, Card, Table} from 'antd';
import {connect} from 'react-redux';

import {getCrawler, getTask} from "../actions/home";

const {Column} = Table;
const title1 = () => '任务采集量统计';
const title2 = () => '分组采集量统计';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTask('task');
        this.props.getCrawler(1, 5, 'task');
        this.props.getCrawler(1, 5, 'group');
        this.props.getTask('rule');
    }

    render() {
        // console.log('props:', this.props);
        const {
            taskData: {allCount, enabledCount, executeCount, sleepCount},
            crawlerTaskData: {pageContent, currentPage, totalCount, pageSize},
        } = this.props;
        return (
            <div style={{padding: '30px'}}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="任务总数" bordered={true}>{allCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="已启用任务" bordered={true}>{enabledCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="执行中任务" bordered={true}>{executeCount}</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="休息任务" bordered={true}>{sleepCount}</Card>
                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col>
                        <Table dataSource={pageContent} title={title1}
                               pagination={{
                                   current: currentPage,
                                   total: totalCount,
                                   pageSize: pageSize,
                                   onChange: (page, pageSize) => {
                                       this.props.getCrawler(page, pageSize, 'task')
                                   },
                                   showQuickJumper: true,
                               }}>
                            <Column
                                title="排名"
                                /* rowKey={record=>record.name}*/
                                render={(text, record, index) => (index + 1)}
                            />
                            <Column
                                title="任务名称"
                                dataIndex="name"
                                key="name"
                            />
                            <Column
                                title="采集量"
                                dataIndex="count"
                                key="count"
                            />
                        </Table>
                    </Col>
                    <Col>
                        <Table dataSource={this.props.crawlerGroupData.pageContent} title={title2}
                               pagination={{
                                   current: this.props.crawlerGroupData.currentPage,
                                   total: this.props.crawlerGroupData.totalCount,
                                   pageSize: this.props.crawlerGroupData.pageSize,
                                   onChange: (page, pageSize) => {
                                       this.props.getCrawler(page, pageSize, 'group')
                                   },
                                   showQuickJumper: true,
                               }}>
                            <Column
                                title="排名"
                                /* rowKey={record=>record.name}*/
                                render={(text, record, index) => (index + 1)}
                            />
                            <Column
                                title="分组名称"
                                dataIndex="groupName"
                                key="groupName"
                            />
                            <Column
                                title="采集量"
                                dataIndex="count"
                                key="count"
                            />
                        </Table>
                    </Col>
                </Row>

                <Card title="规则统计" noHovering style={{width: 500}}>
                    <Card.Grid style={{width: '50%',}}>{this.props.ruleData.allCount}</Card.Grid>
                    <Card.Grid style={{width: '25%',}}>{this.props.ruleData.forumCount}</Card.Grid>
                    <Card.Grid style={{width: '25%',}}>{this.props.ruleData.postCount}</Card.Grid>
                </Card>
            </div>
        );
    }
}

Home.propTypes = {
    getTask: PropTypes.func.isRequired,
    getCrawler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const {home: {taskData, crawlerTaskData, crawlerGroupData, ruleData}} = state;
    return {
        taskData: {...taskData},
        crawlerTaskData: {...crawlerTaskData},
        crawlerGroupData: {...crawlerGroupData},
        ruleData: {...ruleData},
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTask, getCrawler}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
