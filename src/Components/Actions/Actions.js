import React from "react";
import './Actions.css';

export class Actions extends React.Component{
    render() {
        return(
            <div className="circle-actions">
                <button className="start-btn stop-btn2"></button>
                <button className="reset-btn"></button>
            </div>
        )
    }
}
