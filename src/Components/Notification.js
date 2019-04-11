import React from 'react';
import {Alert} from 'reactstrap';

class Notification extends React.Component{
    state={
        type:'',
        text:'',
        open:false
    }

    setNotification(typeOfNotification, textOfNotification){
        this.setState({
            type:typeOfNotification,
            text:textOfNotification,
            open:true
        },() => setInterval(this.toggle(),10000));
    }

    toggle(){
        this.setState({
            open: false
        })
    }

    render(){
        return(
            <div className="notification">
                <Alert color="success" isOpen={this.state.type === "success" } className="align-items-center">
                    {this.state.text}
                </Alert>
                <Alert color="danger" isOpen={this.state.type === "failed"} className="align-items-center">
                    {this.state.text}
                </Alert>
            </div>
        )
    }
}

export default Notification;