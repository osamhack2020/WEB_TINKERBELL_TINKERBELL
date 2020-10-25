import React, { useState, useEffect } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Socket from './classes/socketclass';
import UserStore from './classes/userstore';
import Landingpage from './components/LandingPage';
import About from './components/About/About';
import Chatting from './components/Chatting/Chatting';
import FooterSec from './components/Footer';
import Login from './components/LogIn/LogIn';


function App() {

  useEffect(() =>{
    // app마운트시 실행
    if (sessionStorage.getItem('access_token') && sessionStorage.getItem('username')) {
      Socket.socketConnect(sessionStorage.getItem('access_token'));
      if (sessionStorage.getItem('chats')) {
        Socket.allChats = JSON.parse(sessionStorage.getItem('chats'));
      }
      UserStore.username = sessionStorage.getItem('username');
      UserStore.isLoggedIn = true;
    }

    // unmount될시 socket을 닫아준다
    return () => {
      console.log("websocket disconnected");
      Socket.socket.close();
    }
  },[]);

  return (
    <div>
        <Layout>
            <Header title={<div class="logo-name">TinkerBell</div>}>
                <Navigation>
                    <a href="#">소개</a>
                    <a href="#">사용하기</a>
                    <a href="#">Contact</a>
                    <p>
                      <Login/>
                    </p>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <Landingpage/>
              <About/>
              <Chatting/>
              <FooterSec/>
            </Content>
        </Layout>
    </div>
  );

}

export default App;
