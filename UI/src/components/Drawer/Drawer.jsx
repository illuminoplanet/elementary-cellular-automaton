import React, { Component } from "react";
import Backdrop from "./Backdrop";
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
                <div className={className}></div>
                {backdrop}
            </div>
        );
    }
}
