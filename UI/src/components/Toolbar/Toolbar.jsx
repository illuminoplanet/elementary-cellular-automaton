import React, { Component } from "react";
import ToggleButton from "./ToggleButton";
import "./Toolbar.css";

export default class Toolbar extends Component {
    render() {
        const iconStyle = [
            { left: 0, top: 0 },
            { left: 26, top: 0 },
            { left: 52, top: 0 },
            { left: 26, top: 26 },
        ];
        return (
            <header className="toolbar">
                <div className="toolbar__title">
                    Elementary Cellular Automaton
                </div>
                <div className="toolbar__toggle-button">
                    <ToggleButton
                        openDrawer={this.props.drawerToggleHandler}
                    ></ToggleButton>
                </div>
                <div className="toolbar__icon">
                    <div
                        className="toolbar__icon__square"
                        style={iconStyle[0]}
                    ></div>
                    <div
                        className="toolbar__icon__square"
                        style={iconStyle[1]}
                    ></div>
                    <div
                        className="toolbar__icon__square"
                        style={iconStyle[2]}
                    ></div>
                    <div
                        className="toolbar__icon__square"
                        style={iconStyle[3]}
                    ></div>
                </div>
            </header>
        );
    }
}
