import React from "react";
import './Content.css';
import {Actions} from "../Actions/Actions";
import {TimeControl} from "../TimeControl/TimeControl";
import {TimeView} from "../TimeView/TimeView";

export class Content extends React.Component {
    render() {
        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView/>
                    <TimeControl/>
                    <Actions/>
                </div>
            </div>
        );
    }
}