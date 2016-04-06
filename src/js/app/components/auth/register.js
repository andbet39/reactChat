import React from 'react'
import Rebase from 're-base';

const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com');

class Register extends React.Component
{



  onSubmit(){

    const email = 'andrea.terzani@gmail.com';//this.emailref.value
    const password = '26111979';//this.passowrdref.value
    const name = 'Andrea' ;this.nameref.value
    console.log(email);

    const userInfo = {
      name:name
    };

    base.createUser({
      email: email,
      password: password
    }, (error,data)=>{
        if(error){
          console.error(error)
        }else{
          userInfo.uid=data.uid;
          base.post('users/'+ data.uid,{data:userInfo});
          console.log("Registration done" + data)
        }
    });

  }

  render(){
    return(
      <div className="row">
      <div className="col-md-12">
        <h2>Registration form</h2>
        <input type="text" ref={(ref) => this.emailref = ref}></input>
        <input type="text" ref={(ref) => this.passowrdref = ref}></input>
        <input type="text" ref={(ref) => this.nameref = ref}></input>
        <button type="submit" onClick={() => this.onSubmit()} className="btn btn-success">Registrami</button>
      </div>

      </div>

    )
  }

}

export default Register
