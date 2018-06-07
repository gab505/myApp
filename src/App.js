import React, { Component } from 'react';
import './App.css';
import {firebase, db} from "./utils/firebase";

import Login from "./components/Login";
import SignUp from "./components/SignUp"




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      signUpOpen: false,
      loginError: undefined,
      user: undefined
    }

    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({signUpOpen: false, loginError: "", user})
      }
    });

    this.toggleSignup = this.toggleSignUp.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
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

  

  signUp(username, email, password){

  }

  render() {
    const {signUpOpen, loginError, user} = this.state;
    return (
      <div className="App">
        { <Login loginError={loginError} 
                    tryLogin={this.tryLogin}/>
        }
        { signUpOpen && 
          <SignUp toggleSignUp={this.toggleSignup}
                  trySignUp={this.trySignup}
                  />
        }
      </div>
    );
  }
}

export default App;
