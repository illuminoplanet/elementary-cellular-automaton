import React, { Component } from "react";
import ToggleButton from "./ToggleButton";
import "./Toolbar.css";

export default class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div>
                        <ToggleButton
                            toggle={this.props.drawerToggleHandler}
                        ></ToggleButton>
                    </div>
                    <div className="toolbar-title"></div>
                </nav>
            </header>
        );
    }
}
