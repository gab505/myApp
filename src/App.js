import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignUp from "./components/SignUp"
import Program from "./components/Program"
import Login from "./components/Login"



export default class App extends Component {
    constructor(props){
        super(props);
    }
    

    render(){
        return (
            <Router>
                <div>

                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/program">Program</Link></li>

                    <Route path="/login" component={Login} />
                    <Route path="/program" component={Program} />
                    
                </div>
                
            </Router>
        )
    }
}