import React, {Component} from 'react';
import './Task.css';



export default class Task extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Task">
                <p>Task</p>
                <p>{this.props.name}</p>
                <p>{this.props.dueDate}</p>
            </div>
        )
    }
}