import React, { Component } from "react";
import "./StartButton.css";

export default class StartButton extends Component {
    render() {
        return (
            <button
                className="start-button"
                onClick={this.props.onClick}
            ></button>
        );
    }
}
