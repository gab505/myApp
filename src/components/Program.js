import React, {Component} from 'react';
import './Program.css';
import Task from './Task.js';
import {db} from '../utils/firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Program extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }

        this.loadTasks();

        this.addEvent = this.addEvent.bind(this);
    }

    loadTasks() {
        db.collection('tasks').get().then( snapshot => {
            this.setState({tasks: snapshot.docs});
        });
    }

    addEvent(name, dueTime, complete){
        
        // this.setState(prevState => ({
        //     tasks: [...prevState.tasks, 1]
        // }))

        let newTask = {name, dueTime, complete};

        db.collection('tasks').add(newTask).then((docRef) => {
            // this.loadTasks();

            this.setState(prevState => ({
             tasks: [...prevState.tasks, docRef]
            }))
        });
    }

    render(){
        return (
            <div className="Program">
                <div>
                    <div className="Path"></div>

                    <div className="Top"></div>

                    {this.state.tasks.map(e => (
                        <Task 
                        name={e.data().name}
                        dueTime={e.data().dueTime}
                        />
                    ))}

                    <div className="Bottom">
                        <div className="Box"></div>
                        <Link className="Add" to="/addEvent">Add Event</Link>
                    </div>

                    

                    <Route path="/addEvent"  />
                </div>
            </div>
        )
    }
}