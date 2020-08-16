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
            cells: [],
            grid: null,
        };
    }

    componentDidMount() {
        const cells = [];

        for (let row = 0; row < 100; row++) {
            const current_row = [];
            for (let col = 0; col < 100; col++) {
                const current_cell = {
                    is_live: false,
                };
                current_row.push(current_cell);
            }
            cells.push(current_row);
        }
        this.setState({ cells });
    }
    fetchGrid() {
        fetch("/api/return-grid", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                rule: this.state.rules,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                const grid = json.grid;
                this.setState({ grid });
                this.updateCells();
            });
    }
    updateCells(grid) {
        const cells = [];

        for (let row = 0; row < 100; row++) {
            const current_row = [];
            for (let col = 0; col < 100; col++) {
                const current_cell = {
                    is_live: this.state.grid[row][col],
                };
                current_row.push(current_cell);
            }
            cells.push(current_row);
        }
        this.setState({ cells });
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
    };
    startHandler = () => {
        this.fetchGrid();
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
                <ButtonGroup startHandler={this.startHandler}></ButtonGroup>
                <Grid cells={this.state.cells}></Grid>
            </div>
        );
    }
}
