import React, { Component } from "react";
import Backdrop from "./Backdrop";
import RuleSwitch from "./RuleSwitch";
import "./Drawer.css";

export default class Drawer extends Component {
    render() {
        const backdrop = this.props.isOpen ? (
            <Backdrop toggle={this.props.drawerToggleHandler}></Backdrop>
        ) : null;
        const className = this.props.isOpen
            ? "drawer-window drawer-window-open"
            : "drawer-window";
        return (
            <div className="drawer">
                <div className={className}>
                    <RuleSwitch pattern={"111"}></RuleSwitch>
                    <RuleSwitch pattern={"110"}></RuleSwitch>
                    <RuleSwitch pattern={"101"}></RuleSwitch>
                    <RuleSwitch pattern={"100"}></RuleSwitch>
                    <RuleSwitch pattern={"011"}></RuleSwitch>
                    <RuleSwitch pattern={"010"}></RuleSwitch>
                    <RuleSwitch pattern={"001"}></RuleSwitch>
                    <RuleSwitch pattern={"000"}></RuleSwitch>
                </div>

                {backdrop}
            </div>
        );
    }
}
