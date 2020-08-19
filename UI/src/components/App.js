import React, { Component } from "react";
import Grid from "./Grid/Grid";
import Toolbar from "./Toolbar/Toolbar";
import Drawer from "./Drawer/Drawer";
import Button from "./Button/Button";

import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentRules: [0, 0, 0, 0, 0, 0, 0, 0],
            rule: 0,
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
                rules: this.state.currentRules,
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
    rulesSetHandler = (currentRules, rule) => {
        this.setState({ currentRules, rule });
    };
    startHandler = () => {
        this.fetchGrid();
    };
    resetHandler = () => {
        this.fetchGrid();
    };

    render() {
        return (
            <div className="app">
                <div className="rule" style={{ top: 230, left: 318 }}>
                    Rule {this.state.rule}
                </div>
                <div className="arrow"></div>
                <Toolbar
                    drawerToggleHandler={this.drawerToggleHandler}
                ></Toolbar>
                <Drawer
                    rulesSetHandler={this.rulesSetHandler}
                    currentRules={this.state.rules}
                ></Drawer>
                <Button
                    startHandler={this.startHandler}
                    resetHandler={this.resetHandler}
                ></Button>
                <Grid cells={this.state.cells}></Grid>
            </div>
        );
    }
}
