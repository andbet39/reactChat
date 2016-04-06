import React from 'react';
import RoomList from './rooms-list'
import Rebase from 're-base'
import NewRoom from './new-room'

const base = Rebase.createClass('https://crackling-inferno-4390.firebaseio.com/');

class Room extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init();
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    init(){
        this.ref = base.bindToState('rooms', {
            context: this,
            asArray: true,
            state: 'rooms'
        })
    }

    handleNewRoom(roomName){

        base.post('rooms',{
            data :this.state.rooms.concat([roomName])
        });
    }

    handleChangeRoom(room){
        console.log("Room -> Joining " + room);
        this.props.handleChangeRoom(room);
    }


    render(){
        return(
            <div>
              <h2>Room List</h2>
                <RoomList handleChangeRoom={(room) => this.handleChangeRoom(room)} rooms={this.state.rooms}></RoomList>
                <NewRoom onNewRoom={(newRoom) => this.handleNewRoom(newRoom)} />
            </div>
        )
    }

}

export default Room;
