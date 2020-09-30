import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Landingpage from './components/landingpage';
import About from './components/about';
import Chatting from './components/chatting';
import FooterSec from './components/footer';


function App() {
  return (
    <div style={{height: '100%', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<div class="logo-name">TinkerBell</div>}>
                <Navigation>
                    <a href="#">소개</a>
                    <a href="#">사용하기</a>
                    <a href="#">Contact</a>
                    <a href="/login">Login</a>
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
