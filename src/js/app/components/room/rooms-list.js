import React from 'react'

class RoomList extends React.Component
{

  handleRoomClick(room){
    this.props.handleChangeRoom(room)
  }

  render(){

    const { rooms } = this.props;

    return(
          <div>
              <ul className="list-group">
              <li className="list-group-item" onClick={()=>this.handleRoomClick('default')}>default</li>

              {rooms.map((room,key) => (
                  <li className="list-group-item" key={key} onClick={()=>this.handleRoomClick(room)}>{room}</li>
              ))}
              </ul>
          </div>
        )
  }
}

export default RoomList;
