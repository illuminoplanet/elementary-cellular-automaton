import React, { Component } from "react";
import "./RuleSwitch.css";

export default class RuleSwitch extends Component {
    toggle = (e) => {
        this.props.toggle(e.target.value);
    };
    render() {
        const className = "rule-switch-" + (this.props.isOne ? "one" : "zero");
        return (
            <button
                className={`rule-switch ${className}`}
                onClick={this.toggle}
                value={this.props.idx}
            >
                {this.props.pattern}
            </button>
        );
    }
}
