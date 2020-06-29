import React from "react";
import './Content.css';
import {Actions} from "../Actions/Actions";

export class Content extends React.Component{
    render(){
        return(
            <div className="content-circle">
                <div className="circle">
                    <Actions/>
                </div>
            </div>
        );
    }
}