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

    timeLost = () =>{
        let startTime = new Date();
        let responseTime = new Date(Date.now() + 1000 * this.state.time);
        let timeElem = document.getElementById('time-lost');

        console.log(timeElem);

        startTime.setTime(responseTime-Date.now());

        timeElem.innerHTML = "<span>`${startTime.getUTCHours()}:${startTime.getUTCMinutes()}:${startTime.getUTCSeconds()}:${startTime.getUTCMilliseconds()}`</span>";

        if(startTime.getUTCHours()>0 || startTime.getUTCMinutes()>0|| startTime.getUTCSeconds()>0 || startTime.getUTCMilliseconds()>0){
            requestAnimationFrame(this.timeLost);
        }else{
            alert("Готово")
        }
    }

    onStartTimer() {
        this.setState({
            status: !this.state.status,
            // result: requestAnimationFrame(this.timeLost)
        });
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