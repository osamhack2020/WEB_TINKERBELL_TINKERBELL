import React, { Component } from "react";
import axiosInstance from "./axiosApi";
import UserStore from './userstore';
import Socket from './socketclass';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username_in: "", password_in: "", username_up: "", password_up1: "", password_up2: ""};
    }

    conponentDidUpdate() {
        if(localStorage.getItem('username')) {
            UserStore.username = localStorage.getItem('username');
            UserStore.isLoggedIn = true;
            this.setState({ isLoggedIn: true });
            this.setState({ username: UserStore.username });
        }
    }


    async logIn() {
        try {
            const data = await axiosInstance.post('/token/obtain/', {
                username: this.state.username_in,
                password: this.state.password_in
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + data.access;
            localStorage.setItem('access_token', data.data.access);
            localStorage.setItem('refresh_token', data.data.refresh);
            localStorage.setItem('username', this.state.username_in);
            this.setState({ 'loginDialog': false });
            this.setState({ isLoggedIn: true });
            this.setState({ username: this.state.username_in });
            UserStore.username = this.state.username;
            UserStore.isLoggedIn = true;
            Socket.socketConnect(data.access);
            return data;
        } catch (error) {
            this.setState({ error: true });
            throw error;
        }
    }

    async signUp() {
        if (this.state.password_up1 !== this.state.password_up2) {
            this.setState({ error: true });
            return;
        }
        try {
            const response = await axiosInstance.post('/user/create/', {
                username: this.state.username_up,
                password: this.state.password_up1
            });
            this.setState({ 'signupDialog': false });
            return response;
        } catch (error) {
             console.log(error.stack);
        }
    }


    openSignupDialog() {
      this.setState({ 'signupDialog': true });
    }

    openLoginDialog() {
      this.setState({ 'loginDialog': true });
    }



    render() {
        return (
          <div>
            { this.state.isLoggedIn ?
              (<div>{this.state.username}님 환영합니다</div>) :
                (<Button colored onClick={() => this.openLoginDialog()} raised ripple>로그인</Button>)}
            <Dialog open={this.state.loginDialog}>
              <DialogTitle>로그인</DialogTitle>
              <DialogContent>
                <form>
                  <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({username_in: e.target.value})} required/>
                  <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_in: e.target.value})} required/>
                </form>
              </DialogContent>
              <DialogActions>
                <Button type='button' onClick={() => this.logIn()}>로그인</Button>
                <Button type='button' onClick={() => this.openSignupDialog()}>계정이 없습니다</Button>
              </DialogActions>
            </Dialog>
            <Dialog open={this.state.signupDialog}>
              <DialogTitle>회원가입</DialogTitle>
              <DialogContent>
                <form>
                  <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({username_up: e.target.value})} required/>
                  <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_up1: e.target.value})} required/>
                  <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_up2: e.target.value})} required/>
                    {this.state.error ? (
                      <div class="error">입력값이 올바르지 않습니다</div>
                    ) : (
                      <div></div>
                    )}
                </form>
              </DialogContent>
              <DialogActions>
                <Button type='button' onClick={() => this.signUp()}>회원가입</Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    }
}
export default Login;
