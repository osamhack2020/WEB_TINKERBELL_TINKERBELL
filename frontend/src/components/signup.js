import React, { Component } from 'react';
import '../css/signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password1: '', password2: '' };
  }

  sendSigninRequest() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2})
    };
    fetch('http://localhost:8000/api/rest-auth/registration', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }


    render() {
        return (
          <div class="Sigup">
            <form>
              <input type="text" placeholder="Enter Username" name="uname" required/>
              <input type="password" placeholder="Enter Password" name="psw" required/>
              <input type="password2" placeholder="Enter Password Again" name="psw" required/>
              <button type="submit" onClick={this.sendSigninRequest()}>회원가입</button>
            </form>
          </div>
        )
    }
}

export default Signup;
