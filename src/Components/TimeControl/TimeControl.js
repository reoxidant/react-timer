import React from "react";
import './TimeControl.css';

export class TimeControl extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        if (e.target.value.substr(0, 1) == 0) {
            this.props.onSetNewValue(e.target.value.substring(1));
        } else if (e.target.value.length > 6) {
            this.props.onSetNewValue(e.target.value.substr(0, 6));
        } else {
            this.props.onSetNewValue(e.target.value);
        }
    }

    render() {
        return (
            <div className="time-control">
                {
                    (!this.props.timerIsRun) ?
                        <input
                            className="input-control"
                            type="number"
                            value={this.props.timevalue}
                            onChange={this.handleChange.bind(this)}
                        /> :
                        <div className="time-lose">
                            <span>{this.props.hours}:{this.props.min}:{this.props.seconds}</span>
                        </div>
                }
            </div>
        );
    }
}