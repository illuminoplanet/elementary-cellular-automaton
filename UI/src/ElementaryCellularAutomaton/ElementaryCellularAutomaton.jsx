import React, { Component } from "react";
import Cell from "./Cell/Cell";
import "./ElementaryCellularAutomaton.css";

export default class ElementaryCellularAutomaton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [],
        };
    }

    componentDidMount() {
        const cells = [];

        for (let row = 0; row < 100; row++) {
            const current_row = [];
            for (let col = 0; col < 100; col++) {
                const current_cell = {
                    col,
                    row,
                    is_live: col === 10,
                };
                current_row.push(current_cell);
            }
            cells.push(current_row);
        }
        this.setState({ cells });
    }

    render() {
        const { cells } = this.state;

        return (
            <div className="grid">
                {cells.map((row, row_idx) => {
                    return (
                        <div key={row_idx}>
                            {row.map((cell, cell_idx) => {
                                const { is_live } = cell;
                                return (
                                    <Cell
                                        key={cell_idx}
                                        is_live={is_live}
                                    ></Cell>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
