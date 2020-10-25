import React from "react";
import Socket from '../../classes/socketclass';
import ChatUserIcon from './UserIcon';
import { observer } from 'mobx-react-lite';

function Message(props) {
  return (
    <div class="chat-section">
      <div class={"icon-" + props.chat.from}>
        <ChatUserIcon/>
      </div>
      <p class={"msg-" + props.chat.from}>{props.chat.msg}</p>
    </div>
  );
};

export default Message;
