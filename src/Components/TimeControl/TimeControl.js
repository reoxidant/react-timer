import React from "react";
import './TimeControl.css';

export class TimeControl extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e){
        this.props.onSetNewValue(e.target.value);
    }

    render() {
        return (
            <div className="time-control">
                <input className="input-control" type="number" value={this.props.timevalue} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}