import React, { Component } from 'react';
import UserStore from './userstore';
import Socket from './socketclass';
import '../css/chatting.css';


class Chatting extends Component {
    constructor(props) {
      super(props);
      this.state = { textValue: '메시지를 입력하세요'};
    }


    componentWillMount() {
      if (localStorage.getItem('access_token')) {
        Socket.socketConnect(localStorage.getItem('access_token'));
      }
    }

    componentWillUnmount() {
      console.log("websocket disconnected");
      Socket.socket.disconnect();
    }

    sendMessage() {
      console.log("sent");
      const data = {
        user: UserStore.username,
        message: this.state.textValue
      }
      Socket.socket.send(JSON.stringify(data));
      const newChats = [...Socket.allChats];
      newChats.push({"from": "You", "msg": this.state.textValue});
      this.setState({
        allChats: newChats
      });
      Socket.allChats = newChats;
    }


    render () {
      return (
          <div class="chatting">
              <div class="chat-box">
                  <div class= "box-title">
                      TinkerBell
                  </div>
                  <div class="msg-section">
                    {
                      Socket.allChats.map((chat) => (
                        <div class="chat-section">
                          <div class={'icon-' + chat.from}><svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/><path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/></svg></div>
                          <p class={'msg-' + chat.from}>{chat.msg}</p>
                        </div>
                      ))
                    }
                  </div>
                  <form>
                      <input class="user-input" type="text" value={this.state.textValue}  onChange={(e) => this.setState({textValue: e.target.value})}/>
                      <button class="submit-button" type="button" onClick={(e) => this.sendMessage()}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   viewBox="0 0 448.011 448.011">
  <g>
  <g>
      <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
          l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
          l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/>
  </g>
  </g>
  </svg>
  </button>
                  </form>
              </div>
          </div>
      )
    }
}

export default Chatting;
