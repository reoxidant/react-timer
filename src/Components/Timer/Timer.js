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
        let hours = this.toStringTime((time / 60 / 60).toFixed(0));
        let minutes = this.toStringTime((time / 60 % 60).toFixed(0));
        let seconds = this.toStringTime((time % 60).toFixed(0));
        let ms = this.toStringTime(((time * 1000) % 100).toFixed(0));

        return `${hours}:${minutes}:${seconds}:${ms}`;
    }

    animateTime(startTime, responseTime, timeElem, timer) {
        startTime.setTime(responseTime - Date.now());

        if (this.state.status) {
            timeElem.innerHTML = `${startTime.getUTCHours()}:${startTime.getUTCMinutes()}:${startTime.getUTCSeconds()}:${startTime.getUTCMilliseconds().toString().slice(0, 2)}`;
            this.setState(
                {
                    time: Math.round(startTime.getTime() / 1000)
                }
            )
            cancelAnimationFrame(timer);
        }

        if (startTime.getUTCHours() > 0 || startTime.getUTCMinutes() > 0 || startTime.getUTCSeconds() > 0 || startTime.getUTCMilliseconds() > 20) {
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(() => this.animateTime(startTime, responseTime, timeElem, timer));
        } else {
            timeElem.innerHTML = 0;
        }
    }

    onStartTimer() {
        let startTime = new Date(),
            responseTime = new Date(Date.now() + (1000 * this.state.time)),
            timeElem = document.getElementById('time-lose'),
            timer = null;

        this.setState({
            status: !this.state.status,
            result: this.animateTime(startTime, responseTime, timeElem, timer)
        });
    }

    onStopTimer() {
        const timeElem = document.getElementById('time-lose');

        this.setState({
            status: !this.state.status,
            result: timeElem.textContent
        });
    }

    onResetTimer() {

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
                        onStopTimer={this.onStopTimer.bind(this)}
                        status={status}
                        time={time}
                    />
                </div>
            </div>
        );
    }
}