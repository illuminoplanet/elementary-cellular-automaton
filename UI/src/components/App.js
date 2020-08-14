import React, { Component } from "react";
import Grid from "./Grid/Grid";
import Toolbar from "./Toolbar/Toolbar";
import Drawer from "./Drawer/Drawer";

import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            drawerOpen: false,
        };
    }
    drawerToggleHandler = () => {
        let { drawerOpen } = this.state;
        drawerOpen = !drawerOpen;
        this.setState({ drawerOpen });
    };
    render() {
        return (
            <div className="app">
                <Toolbar
                    drawerToggleHandler={this.drawerToggleHandler}
                ></Toolbar>
                <Drawer
                    isOpen={this.state.drawerOpen}
                    drawerToggleHandler={this.drawerToggleHandler}
                ></Drawer>
                <Grid></Grid>
            </div>
        );
    }
}
