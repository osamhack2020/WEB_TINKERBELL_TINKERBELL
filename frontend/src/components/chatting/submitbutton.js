import React from 'react';
import Socket from '../../classes/socketclass';
import UserStore from '../../classes/userstore';
import SubmitIcon from './submiticon';

const SubButton = (props) => {
  function sendMessage() {
    console.log("sent");
    const data = {
      user: UserStore.username,
      msg: props.textValue,
      context: Socket.context,
      step: Socket.step
    }
    Socket.socket.send(JSON.stringify(data));
    const newChats = [...Socket.allChats];
    newChats.push({"from": "You", "msg": props.textValue});
    Socket.allChats = newChats;
    //sessionstorage에 allChats를 추가
    sessionStorage.setItem("chats", JSON.stringify(Socket.allChats));
    //spinner 시작시킴
    Socket.loading = true;
  };


  return (
    <button
      class="submit-button"
      type="button"
      onClick = {() => sendMessage()}
    >
      <SubmitIcon/>
    </button>
  );
};

export default SubButton;
