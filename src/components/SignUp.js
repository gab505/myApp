import React, {Component} from 'react';
import './SignUp.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    

    render(){
        const {submit, toggleSignUp} = this.props;
        const {username, email, password} = this.state;

        
        return (
            <div className="SignUp">
                <h1>Sign Up</h1>
                <input type="username" placeholder="username" value={username}
                onChange={event => this.setState({username: event.target.value})}
                />
                <input type="email" placeholder="email" value={email}
                onChange={event => this.setState({email: event.target.value})}
                />
                <input type="password" placeholder="password" value={password}
                onChange={event => this.setState({password: event.target.value})}
                />
                <button onClick={() => submit(username, email, password)}>Create Account</button>
                <button onClick={toggleSignUp}>Back to Login</button>
            </div>
        )
    }
}