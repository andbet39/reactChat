import React from 'react'
import Rebase from 're-base';
import moment from 'moment';

const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com');

class Message extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
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

  render (){

    const mess = this.props.data

    return (
      <li className="list-group-item">
        {this.state.userInfo.name} Say:   {mess.text} - {moment(mess.send_date).fromNow()}
      </li>
    )
  }
}

export default Message;
