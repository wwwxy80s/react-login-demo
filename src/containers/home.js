import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Col, Row, Table } from 'antd';
import { connect } from 'react-redux';

import '../css/home.less';
import { getCrawler, getTask } from '../actions/home';

const { Column } = Table;
const title1 = () => '任务采集量统计';
const title2 = () => '分组采集量统计';

class Home extends Component {
  componentDidMount() {
    this.props.getTask('task');
    this.props.getCrawler(1, 5, 'task');
    this.props.getCrawler(1, 5, 'group');
    this.props.getTask('rule');
  }

  render() {
    // console.log('props:', this.props);
    const {
      taskData: { allCount, enabledCount, executeCount, sleepCount },
      crawlerTaskData: { pageContent, currentPage, totalCount, pageSize },
    } = this.props;
    return (
      <div className="container">
        <Row type="flex" align="middle " justify="space-around">
          <Col span={5} className="taskCol">
            <Row type="flex" align="middle" className="countRow">
              <Col offset={2}>
                <div className="allCountImg countImg"/>
              </Col>
              <Col offset={3}>
                <p>任务总数</p>
                <p className="countP">{allCount}</p>
              </Col>
            </Row>
          </Col>
          <Col span={5} className="taskCol">
            <Row type="flex" align="middle" className="countRow">
              <Col offset={2}>
                <div className="enabledCountImg countImg"/>
              </Col>
              <Col offset={3}>
                <p>已启用任务</p>
                <p className="countP">{enabledCount}</p>
              </Col>
            </Row>
          </Col>
          <Col span={5} className="taskCol">
            <Row type="flex" align="middle" className="countRow">
              <Col offset={2}>
                <div className="executeCountImg countImg"/>
              </Col>
              <Col offset={3}>
                <p>执行中任务</p>
                <p className="countP">{executeCount}</p>
              </Col>
            </Row>
          </Col>
          <Col span={5} className="taskCol">
            <Row type="flex" align="middle" className="countRow">
              <Col offset={2}>
                <div className="sleepCountImg countImg"/>
              </Col>
              <Col offset={3}>
                <p>休息任务</p>
                <p className="countP">{sleepCount}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" className="tableRow" justify="space-around">
          <Col span={9} className="tableCol">
            <Table
              className="countTable"
              dataSource={pageContent}
              title={title1}
              pagination={{
                current: currentPage,
                total: totalCount,
                pageSize,
                onChange: (page, pageSize) => {
                  this.props.getCrawler(page, pageSize, 'task');
                },
                showQuickJumper: true,
              }}
            >
              <Column
                title="排名"
                /* rowKey={record=>record.name} */
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
          <Col span={9} className="tableCol">
            <Table
              dataSource={this.props.crawlerGroupData.pageContent}
              title={title2}
              pagination={{
                current: this.props.crawlerGroupData.currentPage,
                total: this.props.crawlerGroupData.totalCount,
                pageSize: this.props.crawlerGroupData.pageSize,
                onChange: (page, pageSize) => {
                  this.props.getCrawler(page, pageSize, 'group');
                },
                showQuickJumper: true,
              }}
            >
              <Column
                title="排名"
                /* rowKey={record=>record.name} */
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
        <Row type="flex" justify="space-around" className="ruleRow">
          <Col span={4}>
            <div className="ruleImg"/>
          </Col>
          <Col span={4}>
            <p>规则总数</p>
            <p className="countP">{this.props.ruleData.allCount}</p>
          </Col>
          <Col span={4}>
            <p>板块规则</p>
            <p className="countP">{this.props.ruleData.forumCount}</p>
          </Col>
          <Col span={4}>
            <p>帖子规则</p>
            <p className="countP">{this.props.ruleData.postCount}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  getTask: PropTypes.func.isRequired,
  getCrawler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { home: { taskData, crawlerTaskData, crawlerGroupData, ruleData } } = state;
  return {
    taskData: { ...taskData },
    crawlerTaskData: { ...crawlerTaskData },
    crawlerGroupData: { ...crawlerGroupData },
    ruleData: { ...ruleData },
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getTask, getCrawler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
