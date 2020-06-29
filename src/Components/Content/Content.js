import React from "react";
import './Content.css';
import {Actions} from "../Actions/Actions";
import {TimeControl} from "../TimeControl/TimeControl";
import {TimeView} from "../TimeView/TimeView";

export class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timevalue: 0
        }
    }

    onSetNewValue(value){
        this.setState({timevalue: value})
    }

    render() {

        const timevalue = this.state.timevalue;

        return (
            <div className="content-circle">
                <div className="circle">
                    <TimeView/>
                    <TimeControl timevalue={timevalue} onSetNewValue={this.onSetNewValue.bind(this)}/>
                    <Actions/>
                </div>
            </div>
        );
    }
}