import React, { Component } from "react";
import "./Backdrop.css";

export default class Backdrop extends Component {
    render() {
        return (
            <button className="backdrop" onClick={this.props.toggle}></button>
        );
    }
}
