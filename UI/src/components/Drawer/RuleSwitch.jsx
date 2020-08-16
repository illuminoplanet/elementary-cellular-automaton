import React, { Component } from "react";
import "./RuleSwitch.css";

export default class RuleSwitch extends Component {
    toggle = (e) => {
        this.props.toggle(e.target.value);
    };
    getRuleSwitchPattern() {
        const ruleSwitchPattern = [];
        for (let i = 0; i < 3; i++) {
            const className =
                "rule-switch__pattern--" +
                (this.props.pattern[i] === "1" ? "one" : "zero");
            ruleSwitchPattern.push(
                <div className={className}>{this.props.pattern[i]}</div>
            );
        }
        return ruleSwitchPattern;
    }
    render() {
        const className =
            "rule-switch__pattern--" + (this.props.isOne ? "one" : "zero");
        const ruleSwitchPattern = this.getRuleSwitchPattern();
        return (
            <div className="rule-switch">
                <div className="rule-switch__pattern">
                    {ruleSwitchPattern}
                    {">"}
                    <button
                        className={className}
                        onClick={this.toggle}
                        value={this.props.idx}
                    >
                        {this.props.isOne}
                    </button>
                </div>
            </div>
        );
    }
}
