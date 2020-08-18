import React, { Component } from "react";
import "./Drawer.css";

export default class Drawer extends Component {
    render() {
        const backdrop = this.props.drawerOpen ? (
            <button
                className="drawer__backdrop"
                onClick={this.props.drawerToggleHandler}
            ></button>
        ) : null;
        return (
            <div className="drawer">
                {backdrop}
                <div className="drawer__window" open={this.props.drawerOpen}>
                    <div className="drawer__window__title">
                        <div>Set Rules</div>
                    </div>
                    <div className="drawer__window__switch-group"></div>
                </div>
            </div>
        );
    }
}
