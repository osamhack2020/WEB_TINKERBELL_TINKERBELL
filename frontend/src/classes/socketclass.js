import { extendObservable } from 'mobx';

class Socket {
  constructor() {
    extendObservable(this, {
      socket: null,
      allChats: [],
      // chatting의 context
      context: -1,
      // chatting의 step
      step: 0,
      loading: false
    })
  }


  socketConnect(token) {
    this.socket = new WebSocket('ws://localhost:8000/ws/chat/?token=' + token);
    this.socket.onopen = e => {
      console.log("websocket connected!");
    }
    //called when message is received from the django backend server
    this.socket.onmessage = e => {
      const newChats = [...this.allChats];
      const data = JSON.parse(e.data);
      newChats.push({ "from": "TinkerBell", "msg": data.msg });
      this.allChats = newChats;
      //sessionstorage에 allChats를 추가
      sessionStorage.setItem("chats", JSON.stringify(this.allChats));
      //spinner를 종료시킴
      this.loading = false; 
      // check if the context of message is same as prev context
      if ((this.context == data.context || data.context == 1 || data.context == 2) && data.context != 0) {
        this.step = this.step + 1;
      } else {
        this.step = 1;
        this.context = data.context;
      }
    }
    this.socket.onerror = e => {
      console.log(e.messasge);
    }
    this.socket.onclose = e => {
      console.log("websocket closed!");
      //this.socketConnect();
    }
  }
}


export default new Socket();
