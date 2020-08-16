import React, { Component } from "react";
import "./ToggleButton.css";

export default class ToggleButton extends Component {
    render() {
        return (
            <button className="toggle-button" onClick={this.props.toggle}>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
            </button>
        );
    }
}
