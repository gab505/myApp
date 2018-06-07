import React, {Component} from 'react';
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    

    
    
    render() {
        const {toggleSignUp, loginError, tryLogin} = this.props;
        const {email, password} = this.state;
        
        return (
            <div className="Login">
                <div className="box">
                    <h1>Task Manager</h1>
                    <input type="email" placeholder="email" value={email}
                        onChange={e => this.setState({email: e.target.value})}
                    />
                    <input type="password" placeholder="password" value={password} 
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button onClick={() => tryLogin(email, password)}>LOGIN</button>
                    <button className="signupBtn"
                            onClick={toggleSignUp}
                    >SIGN UP</button>
                    
                    <div className="error">{loginError}</div>
                    
                </div>
            </div>
        )
    }
}