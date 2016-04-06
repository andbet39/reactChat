import React from 'react';

class NewRoom extends React.Component {

    getRef(ref){
        this.roomRef = ref;
    }

    onSubmit(){
        const roomName  = this.roomRef.value;
        this.roomRef.value='';
        console.log(roomName);
        this.props.onNewRoom(roomName);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="text" ref={(ref) => this.getRef(ref)}></input>
                    <button type="submit" onClick={() => this.onSubmit()} className="btn btn-success">Crea</button>
                </div>
            </div>
        )
    }
}

export default NewRoom;
