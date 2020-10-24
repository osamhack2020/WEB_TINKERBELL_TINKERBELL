import React, { useState, useEffect } from 'react';
import Socket from '../classes/socketclass';
import UserStore from '../classes/userstore';
import Message from './message';
import SubButton from './submitbutton';
import '../css/chatting.css';
import { observer } from 'mobx-react-lite';

const Chatting = observer(() => {
  const [mounted, setMounted] = useState(false);
  const [textValue, changeTextValue] = useState('메시지를 입력하세요');

  if(!mounted){
    if (sessionStorage.getItem('access_token')) {
      Socket.socketConnect(sessionStorage.getItem('access_token'));
    }
  }

  useEffect(() =>{
    setMounted(true);

    return () => {
      console.log("websocket disconnected");
      Socket.socket.close();
    }
  },[]);

  return (
    <div class="chatting">
      <div class="chat-box">
        <div class="box-title">TinkerBell</div>
        <Message />
        <form>
          <input
            class={UserStore.isLoggedIn ? "user-input" : "user-input x-loggedin"}
            type="text"
            value={UserStore.isLoggedIn ? textValue : "로그인이 필요한 서비스입니다"}
            onChange={(e) => changeTextValue(e.target.value)}
          />
          <SubButton textValue={textValue}/>
        </form>
      </div>
    </div>
  );
});




export default Chatting;
