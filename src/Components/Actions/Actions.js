import React from "react";
import './Actions.css';

export class Actions extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerClick() {
        if (this.props.status == false) {
            this.props.onStartTimer();
        } else {
            this.props.onStopTimer();
        }
    }

    resetClick() {
        this.props.onResetTimer();
    }

    render() {
        const status = this.props.status;
        const time = this.props.time;

        return (
            <div className="circle-actions">
                <button disabled={(time == 0) ? "disabled" : null}
                        className={(status == false) ? "start-btn" : "stop-btn"}
                        onClick={this.handlerClick.bind(this)}></button>
                <button className="reset-btn" onClick={this.resetClick.bind(this)}></button>
            </div>
        )
    }
}
