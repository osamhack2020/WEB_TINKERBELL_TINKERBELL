import React, { useState } from 'react';
import axiosInstance from "../classes/axiosApi";
import Socket from '../classes/socketclass';
import UserStore from '../classes/userstore';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from 'react-mdl';

function SignUp() {
  const [signupDialog, openDialog] = useState(false);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);

  const signUp = async() => {
      if (password1 !== password2) {
          setError(true);
          return;
      }
      try {
          const response = await axiosInstance.post('/user/create/', {
              username: username,
              password: password1
          });
          openDialog(false);
          return response;
      } catch (error) {
           console.log(error.stack);
      }
  }

  return (
    <div class="signup">
      <Button type='button' onClick={() => openDialog(true)}>회원가입</Button>
      <Dialog open={signupDialog}>
        <DialogTitle>회원가입</DialogTitle>
        <DialogContent>
          <form>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required/>
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword1(e.target.value)} required/>
            <input type="password" placeholder="Retype Password" onChange={(e) => setPassword2(e.target.value)} required/>
            {error ? (
              <div class="error">입력값이 올바르지 않습니다</div>
            ) : (
              <div></div>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={() => signUp()}>회원가입</Button>
          <Button type='button' onClick={() => openDialog(false)}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp;
