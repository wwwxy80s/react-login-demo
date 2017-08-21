import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form, Icon, Input, Button, Col, Row} from 'antd';

import '../css/login.less';
import {loginAction} from "../actions/login"

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                this.props.loginAction(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Row className="login-row" type="flex" justify="space-around" align="middle">
                <Col span={6}>
                    <Form onSubmit={this.handleSubmit} className="login-form" layout="horizontal">
                        <h2 className="logo">
                            <span>
                                logo
                            </span>
                        </h2>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }
}

Login.propTypes = {
    loginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginAction}, dispatch);
};

export default Form.create({})(connect(null, mapDispatchToProps)(Login));
