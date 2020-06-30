import React from "react";
import './Timer.css';
import {Actions} from "../Actions/Actions";
import {TimeControl} from "../TimeControl/TimeControl";
import {TimeView} from "../TimeView/TimeView";

export class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: "stop",
            time: 0
        }

        this.timeout = null;
    }

    onSetNewValue(value) {
        if (value == '' || value == 0) {
            if (value == '') {
                value = 0;
            }
            this.setState({
                time: value
            })
        } else {
            this.setState({
                time: value
            })
        }
    }

    componentWillMount() {
        clearTimeout(this.timeout);
    }

    onTick() {

    }

    onStartTimer() {
        setInterval(this.onTick.bind(this), 1000)
        this.setState({status: "run"});
    }

    render() {
        const time = this.state.time;
        const status = this.state.status;

        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView
                        status={status}
                        time={time}
                    />
                    <TimeControl
                        onSetNewValue={this.onSetNewValue.bind(this)}
                        status={status}
                        time={time}
                    />
                    <Actions
                        status={status}
                        time={time}
                    />
                </div>
            </div>
        );
    }
}