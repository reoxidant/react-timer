import React from "react";
import './Content.css';
import {Actions} from "../Actions/Actions";
import {TimeControl} from "../TimeControl/TimeControl";
import {TimeView} from "../TimeView/TimeView";

export class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timevalue: 0,
            canStart: false,
            start: true,
            stop: false,
            days: 0,
            hours: 0,
            minutes: 0
        }
    }

    onSetNewValue(value) {
        if (value == '') {
            this.setState({timevalue: 0, canStart: false})
        } else {
            this.setState({
                timevalue: value,
                canStart: true,
                days: Math.floor(value / 60 / 24),
                hours: Math.floor(value / 60),
                minutes: Math.floor(value % 60)
            })
        }
    }


    render() {
        const timevalue = this.state.timevalue;
        const canStart = this.state.canStart;
        const days = (this.state.days.toString().length > 1) ? this.state.days : "0" + this.state.days;
        const hours = (this.state.hours.toString().length > 1) ? this.state.hours : "0" + this.state.hours;
        const minutes = (this.state.minutes.toString().length > 1) ? this.state.minutes : "0" + this.state.minutes;

        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView days={days} hours={hours} minutes={minutes}/>
                    <TimeControl timevalue={timevalue} onSetNewValue={this.onSetNewValue.bind(this)}/>
                    <Actions canStart={canStart}/>
                </div>
            </div>
        );
    }
}