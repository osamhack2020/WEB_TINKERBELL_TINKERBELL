import React, { Component } from 'react';
import '../css/signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password1: '', password2: '', match: false};
  }

  sendSigninRequest() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({ username: this.state.username, password: this.state.password1})
    };
    fetch('http://localhost:8000/signup/', requestOptions).then((response) => {
      if(response.ok) console.log("OK");
      else console.log("failed");
    });
  }


    render() {
        return (
          <div class="Sigup">
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

export default Signup;
