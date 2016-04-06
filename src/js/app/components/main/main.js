import React from 'react'
import Room from '../room/room'
import ChatMain from '../chat/chat-main'
import {Link,Router} from 'react-router'
import Rebase from 're-base';
import { browserHistory } from 'react-router'
const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com/');

class MainApplication extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      currentRoom:"default"
    }
  }

  init(userid) {
    this.ref = base.bindToState('users/'+userid, {
      context: this,
      asArray: false,
      state: 'userInfo'
    })
  }

  componentDidMount(){
    const authData = base.getAuth();
    this.init(authData.uid);
    this.setState({authData:authData})
    console.log(authData);
  }

  handleChangeRoom(roomName){
      console.log("Main ->changing room "+ roomName);
      this.setState({currentRoom:roomName});
  }


  handleLoginBtn(){
    browserHistory.push('/auth/login')
  }

  handleLogoutBtn(){
    console.log("Logout button handler")
    base.unauth();
    this.setState({authData:null})
    browserHistory.push('/')
  }

  render(){

    let logBtn=""
    if(this.state.userInfo){
      logBtn = <button onClick={()=>this.handleLogoutBtn()} className="btn btn-danger">Logout {this.state.userInfo.name}</button>
    }else{
      logBtn = <button onClick={()=>this.handleLoginBtn()} className="btn btn-success">Login</button>
    }


    return(
      <div className="container">
      <Link to="/auth/register">Register</Link>
      <Link to="/testeditor">Editor</Link>
      {logBtn}

        <div className="row">
          <div className="col-md-4">
              <Room loggedUser={this.state.userInfo} handleChangeRoom={(roomName) => {this.handleChangeRoom(roomName)}}/>
          </div>
          <div className="col-md-6">
            <ChatMain loggedUser={this.state.userInfo} room={this.state.currentRoom}/>
          </div>
        </div>
      </div>
    )
  }

}

export default MainApplication
