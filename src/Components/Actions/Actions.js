import React from "react";
import './Actions.css';

export class Actions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const canStart = this.props.canStart;

        return (
            <div className="circle-actions">
                <button disabled={(!canStart) ? "disabled" : null} className="start-btn stop-btn2"></button>
                <button className="reset-btn"></button>
            </div>
        )
    }
}
