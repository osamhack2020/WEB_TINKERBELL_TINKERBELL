import { extendObservable } from 'mobx';

class Socket {
  constructor() {
    extendObservable(this, {
      socket: null,
      allChats: []
    })
  }

  socketConnect(token) {
    console.log(token);
    this.socket = new WebSocket('ws://localhost:8000/ws/chat/?token=' + token);
    this.socket.onopen = e => {
      console.log("websocket connected!");
    }
    //called when message is receivec from the django backend server
    this.socket.onmessage = e => {
      const newChats = [...this.allChats];
      newChats.push({ "from": "TinkerBell", "msg": e.data });
      this.setState({
        allChats: newChats
      });
    }
    this.socket.onerror = e => {
      console.log(e.messasge);
    }
    this.socket.onclose = e => {
      console.log("websocket closed!");
      this.socketConnect();
    }


  }
}


export default new Socket();
