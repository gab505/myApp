import React, {Component} from 'react';
import Task from "./Task"


export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            time : new Date().toLocaleString(),
            hour : 0,
            minute: 0,
            tasks: [1,1,1,1,1,1]
        }
    }

    
    //Get Current Time   
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
          time: new Date().toLocaleString(),
          hour: this.time.getHours(),
          minute: this.time.getMinutes()
        });
    } 
    render(){
        return (
            <div>
                {this.state.time}
                <div class="schedule">
                    {this.tasks.map(obj => {
                        <Task />
                    })}
                </div>
            </div>
        )
    }
}