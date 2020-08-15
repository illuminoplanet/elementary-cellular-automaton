import React, { Component } from "react";
import StartButton from "./Button/StartButton";
import "./ButtonGroup.css";

export default class ButtonGroup extends Component {
    render() {
        return (
            <div className="button-group">
                <StartButton onClick={this.props.startHandler}></StartButton>
            </div>
        );
    }
}
