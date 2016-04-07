import React from 'react';

class ActionPopup extends React.Component
{

  render(){
    return (

      <div style={ style }>Actions</div>

    )
  }
}

export default ActionPopup;


const style  = {
  color: 'green',
  width: '70px',
  height :'30px',
  position: 'absolute',
  top: '0px',
  right: '-70px',
  padding: '10px 15px',
  border: '1px solid #ddd',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};
