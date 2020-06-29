import React from "react";
import './Actions.css';

export class Actions extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerClick() {
        this.props.onStartTimer();
    }

    render() {
        const canPressBtnStart = this.props.canPressBtnStart;
        const timerIsRun = this.props.timerIsRun;

        return (
            <div className="circle-actions">
                <button disabled={(!canPressBtnStart) ? "disabled" : null}
                        className={(!timerIsRun) ? "start-btn" : "stop-btn"}
                        onClick={this.handlerClick.bind(this)}></button>
                <button className="reset-btn"></button>
            </div>
        )
    }
}
