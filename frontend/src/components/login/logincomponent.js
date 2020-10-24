import React, { useState } from "react";
import axiosInstance from "../../classes/axiosApi";
import Socket from '../../classes/socketclass';
import UserStore from '../../classes/userstore';
import SignIn from './signin';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import { observer } from 'mobx-react-lite';


const Login = observer(() => {

    function logOut() {
      UserStore.isLoggedIn = false;
      UserStore.username = null;
      sessionStorage.clear();
      Socket.socket.close();
    }

    return (
      <div>
        {
          UserStore.isLoggedIn ? (
            <div>
              <div class="username_login">{UserStore.username}님 환영합니다</div>
              <Button colored onClick={() => logOut()} raised ripple>
                로그아웃
              </Button>
            </div>
          ) : (
            <SignIn/>
          )
        }
      </div>
    );
});

export default Login;
