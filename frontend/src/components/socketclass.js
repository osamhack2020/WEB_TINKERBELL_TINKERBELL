import { extendObservable } from 'mobx';

class Socket {
  constructor() {
    extendObservable(this, {
      socket: '';
    })
  }

  socketConnect() {

    this.socket = new WebSocket('ws://localhost:8000/ws/chat/?token=');
    this.socket.onopen = e => {
      console.log("websocket connected!");
    }
    //called when message is receivec from the django backend server
    this.socket.onmessage = e => {
      const newChats = [...this.state.allChats];
      newChats.push({ "from": "TinkerBell", "msg": e.data });
      this.setState({
        allChats: newChats
      });
    }
    this.state.socket.onerror = e => {
      console.log(e.messasge);
    }
    this.state.socket.onclose = e => {
      console.log("websocket closed!");
      this.socketConnect();
    }
  }


  componentWillUnmount() {
    console.log("websocket disconnected");
    this.state.socket.disconnect();
  }
}


export default new Socket();
