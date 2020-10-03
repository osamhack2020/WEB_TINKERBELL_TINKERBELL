import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import Landingpage from './components/landingpage';
import About from './components/about';
import Chatting from './components/chatting';
import FooterSec from './components/footer';
import UserStore from './components/userstore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.sendSigninRequest();
  }

  handleOpenSignup() {
    this.setState({
      opensignupdialog: true
    });
  }

  handleCloseSignup() {
    this.sendSignupRequest();
  }

  async sendSignupRequest() {
    if (this.state.password_up1 != this.state.password_up2) {
      this.setState({
        error: true
      })
    }
    else {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({ username: this.state.username_up, password: this.state.password_up1 })
      };
      UserStore.loading = true;
      const response = await fetch('http://localhost:8000/signup/', requestOptions);
      const data = await response.json();

      //successfully loggedin
      if (data["data"] == 1) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = this.state.username_up;
        //close modal
        this.setState({
          opensignupdialog: false,
          openDialog: false
        });
      }
      else {
        this.setState({
          error: true
        })
      }
    }
  }


  async sendSigninRequest() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({ username: this.state.username_in, password: this.state.password_in })
    };
    UserStore.loading = true;
    const response = await fetch('http://localhost:8000/signin/', requestOptions);
    const data = await response.json();

    //successfully loggedin
    if (data["data"] == 1) {
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
      UserStore.username = this.state.username_in;
      //close modal
      this.setState({
        openDialog: false
      });
    }
    else {
      this.setState({
        error: true
      })
    }
  }



  render() {
    return (
      <div style={{height: '100%', position: 'relative'}}>
          <Layout fixedHeader>
              <Header title={<div class="logo-name">TinkerBell</div>}>
                  <Navigation>
                      <a href="#">소개</a>
                      <a href="#">사용하기</a>
                      <a href="#">Contact</a>
                      <p>
                        <div>
                          { UserStore.isLoggedIn ?
                            (<div>{UserStore.username}님 환영합니다</div>) :
                              (<Button colored onClick={() => this.handleOpenDialog()} raised ripple>로그인</Button>)}
                          <Dialog open={this.state.openDialog}>
                            <DialogTitle>로그인</DialogTitle>
                            <DialogContent>
                              <form>
                                <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({username_in: e.target.value})} required/>
                                <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_in: e.target.value})} required/>
                              </form>
                            </DialogContent>
                            <DialogActions>
                              <Button type='button' onClick={() => this.handleCloseDialog()}>로그인</Button>
                              <Button type='button' onClick={() => this.handleOpenSignup()}>계정이 없습니다</Button>
                            </DialogActions>
                          </Dialog>
                          <Dialog open={this.state.opensignupdialog}>
                            <DialogTitle>회원가입</DialogTitle>
                            <DialogContent>
                              <form>
                                <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({username_up: e.target.value})} required/>
                                <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_up1: e.target.value})} required/>
                                <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password_up2: e.target.value})} required/>
                                  {this.state.error ? (
                                    <div class="error">입력값이 올바르지 않습니다</div>
                                  ) : (
                                    <div></div>
                                  )}
                              </form>
                            </DialogContent>
                            <DialogActions>
                              <Button type='button' onClick={() => this.handleCloseSignup()}>회원가입</Button>
                            </DialogActions>
                          </Dialog>
                        </div>
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
