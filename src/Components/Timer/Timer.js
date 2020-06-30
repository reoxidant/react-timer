import React from "react";
import './Timer.css';
import {Actions} from "../Actions/Actions";
import {TimeControl} from "../TimeControl/TimeControl";
import {TimeView} from "../TimeView/TimeView";

export class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false,
            time: 0,
            result: 0
        }

        this.ms = this.state.time * 1000;
        this.timeout = null;
    }

    onSetNewValue(value) {
        if (value == '' || value == 0) {
            if (value == '') {
                value = 0;
            }
            this.setState({
                time: value,
                result: this.getTime(value)
            })
        } else {
            this.setState({
                time: value,
                result: this.getTime(value)
            })
        }
    }

    toStringTime(time) {
        if (time.length == 1) {
            return "0" + time;
        }
        return time;
    }

    getTime(time) {
        // let hours = this.toStringTime((time / 60 / 60).toFixed(0));
        // let minutes = this.toStringTime((time / 60 % 60).toFixed(0));
        // let seconds = this.toStringTime((time % 60).toFixed(0));
        // let ms = this.toStringTime((time % 100).toFixed(0));


        let hours = this.toStringTime((time / 360000).toFixed(0));
        let minutes = this.toStringTime((time % 360000)/ 6000 ).toFixed(0);
        let seconds = this.toStringTime(((time % 360000) % 6000) / 100).toFixed(0);
        let ms = this.toStringTime(((time % 360000) % 6000) % 100).toFixed(0);

        // return `${ms}`

        return `${hours}:${minutes}:${seconds}:${ms}`;
    }


    onTimeCounter() {
        if(this.state.time <= 0){
            clearInterval(this.timeout);
            return;
        }
        this.setState({
            time:this.state.time-1,
            result: this.getTime(this.state.time)
        });
    }

    onStartTimer() {
        this.timeout = setInterval(this.onTimeCounter.bind(this), 10)
        this.setState({status: !this.state.status});
    }

    render() {
        const time = this.state.time;
        const status = this.state.status;
        const result = this.state.result;

        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView
                        result={result}
                        status={status}
                    />
                    <TimeControl
                        result={result}
                        onSetNewValue={this.onSetNewValue.bind(this)}
                        status={status}
                        time={time}
                    />
                    <Actions
                        onStartTimer={this.onStartTimer.bind(this)}
                        status={status}
                        time={time}
                    />
                </div>
            </div>
        );
    }
}