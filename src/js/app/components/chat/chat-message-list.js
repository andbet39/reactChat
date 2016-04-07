import React from 'react'
import Message from './chat-message'

class MessageList extends React.Component
{

  render (){

    const { messages } = this.props;

    return(
      <div className="row">
        <div className="col-md-12">
         <div className="list-group">
           {messages.map((mess,key) => (
             <Message key={key} data={mess}/>
           ))}
         </div>
        </div>
      </div>
    )
  }
}

export default MessageList;
