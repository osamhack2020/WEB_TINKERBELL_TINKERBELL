import React, { useState } from 'react';
import axiosInstance from "../../classes/axiosApi";
import Socket from '../../classes/socketclass';
import UserStore from '../../classes/userstore';
import SignUp from './SignUp';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';

function SignIn() {
  const [loginDialog, openDialog] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async() => {
      try {
          const data = await axiosInstance.post('/token/obtain/', {
              username: username,
              password: password
          });
          axiosInstance.defaults.headers['Authorization'] = "JWT " + data.data.access;
          sessionStorage.setItem('access_token', data.data.access);
          sessionStorage.setItem('refresh_token', data.data.refresh);
          sessionStorage.setItem('username', username);
          UserStore.isLoggedIn = true;
          UserStore.username = username;
          Socket.socketConnect(data.data.access);
          openDialog(false);
      } catch (error) {
          throw error;
      }
  }


  return (
    <div>
      <Button colored onClick={() => openDialog(true)} raised ripple>로그인</Button>
      <Dialog open={loginDialog}>
        <DialogTitle>로그인</DialogTitle>
        <DialogContent>
          <form>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required/>
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>
          </form>
        </DialogContent>
        <DialogActions>
          <SignUp/>
          <Button type='button' onClick={() => openDialog(false)}>닫기</Button>
          <Button type='button' onClick={() => logIn()}>로그인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignIn;
