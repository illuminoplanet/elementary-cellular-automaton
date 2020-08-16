import React, { Component } from "react";
import RuleSwitch from "./RuleSwitch";
import "./Drawer.css";

export default class Drawer extends Component {
    getRuleSwitch() {
        const ruleSwitch = [];
        for (let i = 0; i <= 7; i++) {
            ruleSwitch.push(
                <RuleSwitch
                    key={7 - i}
                    toggle={this.props.rulesSetHandler}
                    isOne={this.props.currentRules[i]}
                    pattern={(7 - i).toString(2).padStart(3, "0")}
                    idx={i}
                ></RuleSwitch>
            );
        }
        return ruleSwitch;
    }
    render() {
        const backdrop = this.props.isOpen ? (
            <button
                className="drawer__backdrop"
                onClick={this.props.drawerToggleHandler}
            ></button>
        ) : null;
        const className = this.props.isOpen
            ? "drawer__window drawer__window--open"
            : "drawer__window";
        const ruleSwitch = this.getRuleSwitch();
        return (
            <div className="drawer">
                {backdrop}
                <div className={className}>
                    <div className="drawer__title">Set Rules</div>
                    <div className="drawer__switch-group">{ruleSwitch}</div>
                </div>
            </div>
        );
    }
}
