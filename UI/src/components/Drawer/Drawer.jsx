import React, { Component } from "react";
import "./Drawer.css";

export default class Drawer extends Component {
    render() {
        return (
            <div className="drawer">
                <div className="drawer-window"></div>
                <div className="drawer-backdrop"></div>
            </div>
        );
    }
}
