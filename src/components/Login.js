import React, { Component } from 'react';
import './Login.css';
import {firebase, db} from "../utils/firebase";

import SignUp from "./SignUp"
import Program from "./Program"






export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      signUpOpen: false,
      loginError: undefined,
      user: undefined,
      email: "",
      password: ""
    }

    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({signUpOpen: false, loginError: "", user})
      }
    });

    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleSignUp(){
    this.setState(prevState => {
      return {
        signUpOpen: !prevState.signUpOpen
      }
    })
  }

  tryLogin(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({
          loginError: error.message
        });
      })
  }

  submit(username, email, password){
        

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {

          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(errorMessage);
                    
        });
  }
  handleChange(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name] : ev.target.value
    })
  }
  
  render() {
    const {signUpOpen, loginError, user, email, password} = this.state;
    return (
      <div className="App">
          
          <div className="box">
                <h1>KS Planner</h1>
                <input type="email" name="email" placeholder="email" value={email}
                          onChange={this.handleChange}
                />
                <input type="password" name="password" placeholder="password" value={password} 
                          onChange={this.handleChange}
                />
                <button onClick={() => this.tryLogin(email, password)}>LOGIN</button>
                      
                      
                <div className="error">{loginError}</div>
                <button className="signupBtn" onClick={this.toggleSignUp}>
                  SIGN UP
                </button>
                
  
          </div>
          <div className="Toggle">
            
            { signUpOpen && <SignUp submit={this.submit} toggleSignUp={this.toggleSignUp}/>
            }
          </div>
          

          
          
        </div> 
      
       
    );
  }
}


