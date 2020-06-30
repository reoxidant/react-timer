import React from "react";
import './TimeView.css';

export class TimeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const time = this.props.status;
        const status = this.props.status;
        return (
            <div className="time-view">
                {(status == "stop") ?
                    <span>
                        00:00:00:00
                    </span>
                    : null}
            </div>
        );
    }
}