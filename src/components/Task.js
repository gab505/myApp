import React, {Component} from 'react';



export default class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtime : new Date().toLocaleString(),
            dhour : this.time.getHours(),
            dminute: this.time.getMinutes(),
        }
    }

    render(){
        return (
            <div>
                hi
            </div>
        )
    }
}