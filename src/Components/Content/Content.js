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
            timerIsRun: false,
            start: true,
            stop: false,
            hours: 0,
            min: 0,
            seconds: 0
        }
    }

    onSetNewValue(value) {
        if (value == '' || value == 0) {
            if (value == '') {
                value = 0;
            }
            this.setState({
                timevalue: value,
                canPressBtnStart: false,
                hours: Math.floor(value),
                min: Math.floor(value),
                seconds: Math.floor(value)
            })
        } else {
            console.log(value);
            this.setState({
                timevalue: value,
                canPressBtnStart: true,
                hours: Math.floor(value / 60 / 60),
                min: Math.floor(value / 60 % 60),
                seconds: Math.floor(value % 60)
            })
        }
    }

    onStartTimer() {
        this.setState({canPressBtnStart: !this.state.canPressBtnStart});
    }

    render() {
        const timerIsRun = this.state.timerIsRun;
        const timevalue = this.state.timevalue;
        const canPressBtnStart = this.state.canPressBtnStart;
        const hours = (this.state.hours.toString().length > 1) ? this.state.hours : "0" + this.state.hours;
        const min = (this.state.min.toString().length > 1) ? this.state.min : "0" + this.state.min;
        const seconds = (this.state.seconds.toString().length > 1) ? this.state.seconds : "0" + this.state.seconds;

        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView hours={hours} min={min} seconds={seconds}/>
                    <TimeControl
                        days={hours}
                        min={min}
                        seconds={seconds}
                        timevalue={timevalue}
                        onSetNewValue={this.onSetNewValue.bind(this)}
                        timerIsRun={timerIsRun}
                    />
                    <Actions
                        canPressBtnStart={canPressBtnStart}
                        timerIsRun={timerIsRun}
                        onStartTimer={this.onStartTimer.bind(this)}
                    />
                </div>
            </div>
        );
    }
}