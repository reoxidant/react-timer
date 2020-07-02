import React from "react";
import './TimeView.css';

export class TimeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const status = this.props.status;
        const result = this.props.result;

        return (
            <div className={(status)?"time-view hidden":"time-view show"}>
                {(!status) ?
                    <span>{(!result) ? "00:00:00:00" : result}</span>
                    : null}
            </div>
        );
    }
}