import React from 'react';
import LoginForm from '../Components/Login/LoginForm';
class Login extends React.Component{
    render(){
        return(
            <LoginForm history = {this.props.history}/>
        )
    }
}

export default Login;