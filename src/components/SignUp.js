import React, {Component} from 'react';
import {firebase, db} from "./utils/firebase";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    submit(){
            const {username, email, password} = this.state;

            firebase.auth().doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState(() => ({ ...INITIAL_STATE }));
                    history.push(routes.HOME);
                })
                .catch(error => {
                    this.setState('error', error);
                });
    }

    render(){
        const {toggleSignUp} = this.props;
        const {username, email, password} = this.state;

        return (
            <div className="SignUp">
                <input value={username}
                onChange={event => this.setState('username, event.target.value')}
                type="text"
                placeholder="User Name"
                />
                <input value={email}
                onChange={event => this.setState('email, event.target.value')}
                type="text"
                placeholder="Email"
                />
                <input value={password}
                onChange={event => this.setState('password, event.target.value')}
                type="text"
                placeholder="Password"
                />
                <button onClick={() => submit(username, email, password)}>Create Account</button>
            </div>
        )
    }
}