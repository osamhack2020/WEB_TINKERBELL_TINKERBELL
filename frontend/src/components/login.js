import React, { Component } from "react";
import axiosInstance from "./axiosApi";
import Socket from './socketclass';
import UserStore from './userstore';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import { observer } from 'mobx-react';


const Login = observer(
  class Login extends Component {
      constructor(props) {
          super(props);
          this.state = {username_in: "", password_in: "", username_up: "", password_up1: "", password_up2: ""};
      }


      componentWillMount() {
          if(localStorage.getItem('username')) {
              UserStore.isLoggedIn = true;
              UserStore.username = localStorage.getItem('username');
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
              UserStore.isLoggedIn = true;
              UserStore.username = this.state.username_in;
              Socket.socketConnect(data.data.access);
              this.closeLoginDialog();
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

      logOut() {
        UserStore.isLoggedIn = false;
        UserStore.username = null;
        localStorage.clear();
        Socket.socket.close();
      }


      openSignupDialog() {
        this.setState({ 'signupDialog': true });
      }

      openLoginDialog() {
        this.setState({ 'loginDialog': true });
      }

      closeLoginDialog() {
        this.setState({ 'loginDialog': false });
      }

      closeSignupDialog() {
        this.setState({ 'signupDialog': false });
      }

      render() {
          return (
            <div>
              { UserStore.isLoggedIn ?
                (<div><div>{ UserStore.username }님 환영합니다</div><Button colored onClick={() => this.logOut()} raised ripple>로그아웃</Button></div>) :
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
                  <Button type='button' onClick={() => this.closeLoginDialog()}>닫기</Button>
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
                  <Button type='button' onClick={() => this.closeSignupDialog()}>닫기</Button>
                </DialogActions>
              </Dialog>
            </div>
          )
      }
  }
)

export default Login;
