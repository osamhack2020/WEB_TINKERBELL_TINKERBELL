import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
    render() {
        return (
            <div class="login">
              <form>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <input type="password2" placeholder="Enter Password Again" name="psw" required/>
                <button type="submit">Login</button>
              </form>
            </div>
        )
    }
}

export default Login;
