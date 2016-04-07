import React from 'react'
import Rebase from 're-base';
import moment from 'moment';
import ActionPopup from './message_action'
const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com');

class Message extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      toolVisible:false
    }
  }

  componentDidMount() {
    this.init(this.props.data.sent_by);
  }

  init(uid) {
    this.ref = base.fetch('users/'+uid, {
      context: this,
      asArray: false,
      then(userData){
        this.setState({userInfo:userData});
      }
    })
  }

  onMouseEnter(){
      this.setState({
        toolVisible:true
      })
  }

  onMouseLeave(){
    this.setState({
      toolVisible:false
    })
  }


  render (){
    const mess = this.props.data
    let actionpopup='';

    if(this.state.toolVisible){
      actionpopup =  <ActionPopup />
    }

    return (
      <div  onMouseLeave={()=>this.onMouseLeave()} onMouseEnter={()=>this.onMouseEnter()} className="list-group-item">
        {this.state.userInfo.name} Say:   {mess.text} - {moment(mess.send_date).fromNow()}
        { actionpopup }
      </div>
    )
  }
}

export default Message;
