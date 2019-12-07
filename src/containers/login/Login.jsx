import React, { Component } from 'react';
import { login } from '../../utils/session';

class Login extends Component {

    handlerLogin = () => {
        login();
    }

    componentWillUnmount = () => {
        // alert(1);
    }

    render() {
        return (
            <div className="login">
                Login
                <button onClick={this.handlerLogin}>Iniciar Sesión</button>
            </div>
        )
    }
}

export default Login;