import React, { Component } from "react";
import Grid from "./Grid/Grid";
import Toolbar from "./Toolbar/Toolbar";
import Drawer from "./Drawer/Drawer";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            drawerOpen: false,
            rules: [0, 0, 0, 0, 0, 0, 0, 0],
        };
    }
    drawerToggleHandler = () => {
        let { drawerOpen } = this.state;
        drawerOpen = !drawerOpen;
        this.setState({ drawerOpen });
    };
    rulesSetHandler = (idx) => {
        let { rules } = this.state;
        rules[idx] = 1 - rules[idx];
        this.setState({ rules });
        console.log(rules);
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
                    rulesSetHandler={this.rulesSetHandler}
                    currentRules={this.state.rules}
                ></Drawer>
                <ButtonGroup></ButtonGroup>
                <Grid></Grid>
            </div>
        );
    }
}
