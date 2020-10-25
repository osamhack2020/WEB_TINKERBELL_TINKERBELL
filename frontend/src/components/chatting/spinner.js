import React from 'react';
import Socket from '../../classes/socketclass';
import UserStore from '../../classes/userstore';
import ChatUserIcon from './UserIcon';
import Loader from 'react-loader-spinner'

function Spinner () {
  return (
    <div class="chat-section">
      <div class="icon-TinkerBell">
        <ChatUserIcon/>
      </div>
      <p class="msg-TinkerBell">
        <Loader
          type="ThreeDots"
          color="#6d10b0"
          height={30}
          width={24}
          timeout={3000000}
        />
      </p>
    </div>
  );
};




export default Spinner;
