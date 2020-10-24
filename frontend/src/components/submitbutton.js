import React from 'react';
import Socket from '../classes/socketclass';
import UserStore from '../classes/userstore';

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
  };


  return (
    <button
      class="submit-button"
      type="button"
      onClick = {(e) => sendMessage()}
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 448.011 448.011"
      >
        <g>
          <g>
            <path
              d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
          l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
          l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default SubButton;
