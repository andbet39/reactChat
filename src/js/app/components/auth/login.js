import React from 'react'
import Rebase from 're-base';

import { browserHistory } from 'react-router'

const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com/');

class Login extends React.Component
{

  onSubmit(){

    const email = this.emailref.value
    const password = this.passowrdref.value

    base.authWithPassword({
      email: email,
      password: password
    }, (error,authData)=>{
      if (error) {
            console.error("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", authData);
              browserHistory.push('/');

            }
        }
      );
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <h2>Login form</h2>
          <input type="text" ref={(ref) => this.emailref = ref}></input>
          <input type="text" ref={(ref) => this.passowrdref = ref}></input>
          <button type="submit" onClick={() => this.onSubmit()} className="btn btn-success">Login</button>
        </div>
      </div>

    )
  }

}

export default Login
