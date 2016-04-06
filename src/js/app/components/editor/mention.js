import React from 'react'

class ChatMention extends React.Component
{
  constructor(props){
    super(props)
  }

  render (){

    return (
        <span style={styles.handle}><a href="www.google.com">{this.props.children}</a></span>
    )

  }

}


const styles = {
        handle: {
          color: 'rgba(98, 177, 254, 1.0)',
          direction: 'ltr',
          unicodeBidi: 'bidi-override',
        }
      }
export default ChatMention
