import React, { Component } from "react";
import Backdrop from "./Backdrop";
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
            <Backdrop toggle={this.props.drawerToggleHandler}></Backdrop>
        ) : null;
        const className = this.props.isOpen
            ? "drawer-window drawer-window-open"
            : "drawer-window";
        const ruleSwitch = this.getRuleSwitch();
        return (
            <div className="drawer">
                <div className={className}>{ruleSwitch}</div>

                {backdrop}
            </div>
        );
    }
}
