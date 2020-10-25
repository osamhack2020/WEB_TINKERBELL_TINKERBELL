import React, { useState } from 'react';
import Socket from '../../classes/socketclass';
import UserStore from '../../classes/userstore';
import Message from './message';
import SubButton from './submitbutton';
import Spinner from './spinner';
import '../../css/chatting.css';
import { observer } from 'mobx-react-lite';

const Chatting = observer(() => {
  const [textValue, changeTextValue] = useState('메시지를 입력하세요');

  return (
    <div class="chatting">
      <div class="chat-box">
        <div class="box-title">TinkerBell</div>
        <div class="msg-section">
          {Socket.allChats.map((chat, i) => (<Message key={i} chat={chat}/>))}
          {Socket.loading ? <Spinner/> : <div></div>}
        </div>
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
