import React from 'react';
import ChatInput from './chat-input';
import MessageList from './chat-message-list';
import Rebase from 're-base';
import moment from 'moment';

const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com/');


class ChatMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.init(this.props.room);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.room);
  }

  componentWillUnmount(){
      base.removeBinding(this.ref);
  }

  init(room) {
    this.ref = base.bindToState(room, {
      context: this,
      asArray: true,
      state: 'messages'
    })
  }

  handleNewMessage(newMessage) {

    const datenow = moment().format();
    const mess =  {
      text:newMessage,
      send_date: datenow,
      sent_by :this.props.loggedUser.uid
    }

    base.post(this.props.room, {
     data: this.state.messages.concat([mess])
    })
  }

  render() {
    return (

      <div>
      <h2> Room : {this.props.room} </h2>
        <MessageList messages = { this.state.messages } />
        <ChatInput onPostMessage = {(newMessage) => this.handleNewMessage(newMessage)} />
      </div>
    )
  }

}

export default ChatMain;
