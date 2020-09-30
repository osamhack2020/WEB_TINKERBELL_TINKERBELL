import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../App';
import Login from './login';
import Signup from './signup';
import UserStore from './userstore';

class Main extends Component {
  async componentDidMount() {
    if (UserStore.isLoggedIn) {
      // console.log("123");
    }else {
      // console.log("");
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Switch>
    )
  }
}

export default Main;
