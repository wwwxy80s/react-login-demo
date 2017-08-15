import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {withRouter} from 'react-router';
// import {push} from 'react-router-redux';
//
//
import store from '../Store';
import DevTools from '../utils/Devtools';
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


    // componentWillMount(){
    //     if (localStorage.getItem('token')) {
    //         console.log('enter if');
    //         console.log(this.props);
    //         this.props.history.push('/home');
    //     }
    // }


    onSubmit(ev) {
        ev.preventDefault();
        const username = this.state.user.username;
        const password = this.state.user.password;
        if (!username.trim() || !password.trim()) {
            return;
        }
        this.props.onLogin(this.state.user);
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
        // if (localStorage.getItem('token')) {
        //     console.log('enter if');
        //     this.props.history.push('/home');
        //     // store.dispatch(push('/home'));
        // }
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
                <DevTools/>
            </div>
        );
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//     return {
//         loginSuccess: state.loginSuccess
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => {
            // console.log(user);
            dispatch(loginAction(user));
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Login);

