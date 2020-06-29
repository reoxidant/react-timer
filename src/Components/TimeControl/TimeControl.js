import React from "react";
import './TimeControl.css';

export class TimeControl extends React.Component {
    render() {
        return (
            <div className="time-control">
                <input className="input-control" type="text" value="0"/>
            </div>
        );
    }
}