import React, {useState} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Landingpage from './components/landingpage';
import About from './components/about';
import Chatting from './components/chatting';
import FooterSec from './components/footer';
import Login from './components/login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {sticky: false};
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    console.log(window.pageYOffset);
    if (window.scrollY >= 64) {
      this.setState({ sticky: true});
    }else {
      this.setState({ sticky: false});
    }
  }

  render() {
    return (
      <div scroll ref={this.myRef} onScroll={this.onScroll}>
          <Layout>
              <Header scroll class = {this.sticky? 'sticky' : ''} title={<div class="logo-name">TinkerBell</div>}>
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

}

export default App;
