import React from "react";
import './TimeView.css';

export class TimeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-view">
                <span>{this.props.hours}:{this.props.min}:{this.props.seconds}:00</span>
            </div>
        );
    }
}