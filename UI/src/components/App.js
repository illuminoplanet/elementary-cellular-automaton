import React, { Component } from "react";
import Grid from "./Grid/Grid";
import Toolbar from "./Drawer/Toolbar";
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
                <Drawer open={this.state.drawerOpen}></Drawer>
                <Grid></Grid>
            </div>
        );
    }
}
