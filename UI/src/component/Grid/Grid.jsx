import React, { Component } from "react";
import Cell from "./Cell";
import "./Grid.css";

export default class Grid extends Component {
    render() {
        const { cells } = this.props;

        return (
            <div className="grid">
                <div className="grid__group">
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
            </div>
        );
    }
}
