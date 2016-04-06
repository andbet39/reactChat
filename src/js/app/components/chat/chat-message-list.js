import React from 'react'
import Message from './chat-message'

class MessageList extends React.Component
{

  render (){

    const { messages } = this.props;

    return(
      <div className="row">
        <div className="col-md-12">
         <ul className="list-group">
           {messages.map((mess,key) => (
             <Message key={key} data={mess}/>
           ))}
         </ul>
        </div>
      </div>
    )
  }
}

export default MessageList;
