import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {loginAction} from "../actions/login"

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);

        this.state = {
            user: {
                username: '',
                password: '',
            }
        };
    }

    onSubmit(ev) {
        ev.preventDefault();
        const username = this.state.user.username;
        const password = this.state.user.password;
        if (!username.trim() || !password.trim()) {
            return;
        }
        this.props.loginAction(this.state.user);
    }

    onUsernameChange(event) {
        this.setState(
            {
                user: {
                    ...this.state.user,
                    username: event.target.value,
                }
            }
        );
    }

    onPasswordChange(event) {
        this.setState(
            {
                user: {
                    ...this.state.user,
                    password: event.target.value,
                }
            }
        );
    }

    render() {
        return (
            <div>
                <div className="login">
                    <h2>采集管理平台</h2>
                    <hr/>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input className="username"
                                   placeholder="请输入用户名"
                                   type="text"
                                   onChange={this.onUsernameChange}
                                   value={this.state.user.username}/>
                        </div>
                        <div>
                            <input className="password"
                                   placeholder="请输入密码"
                                   type="password"
                                   onChange={this.onPasswordChange}
                                   value={this.state.user.password}/>
                        </div>
                        <button className="login-btn" type="submit">
                            登陆
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginAction}, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
