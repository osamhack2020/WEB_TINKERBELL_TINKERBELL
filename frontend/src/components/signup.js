import React, { Component } from 'react';
import '../css/signup.css';
import UserStore from './userstore';
import { Redirect } from 'react-router-dom';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password1: '', password2: '', match: false, redirect: false};
  }

  async sendSigninRequest() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({ username: this.state.username, password: this.state.password1 })
    };

    UserStore.loading = true;
    const response = await fetch('http://localhost:8000/signup/', requestOptions);
    console.log("this?");
    if (response.ok) {
      console.log("123123");
      UserStore.isLoggedIn = true;
      UserStore.username = this.state.username;
      UserStore.loading = false;
      this.context.router.push('/anotherroute');
    }else {
      console.log("asjklflksahflkashf");
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
    }
  }

    render() {
        if (UserStore.loading) {
          return <div>loading~</div>
        }
        else if (UserStore.isLoggedIn) {
          return <Redirect to ='/'/>
        }
        else{
          return (
            <div class="Signup">
              <form>
                <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({username: e.target.value})} required/>
                <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password1: e.target.value})} required/>
                <input type="password2" placeholder="Enter Password Again" onChange={(e) => this.setState({password2: e.target.value})} required/>
                <button type="submit" onClick={()=> this.sendSigninRequest()}>회원가입</button>
              </form>
            </div>
          )
        }


    }
}

export default Signup;
