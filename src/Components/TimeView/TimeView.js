import React from "react";
import './TimeView.css';

export class TimeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-view">
                {/*<span>00:05:00:00</span>*/}
                <span>{this.props.days}:{this.props.hours}:{this.props.minutes}:00</span>
            </div>
        );
    }
}