import React, { Component } from "react";
import "./Cell.css";

export default class Cell extends Component {
    render() {
        const { is_live } = this.props;
        const class_name = "cell-" + (is_live ? "live" : "dead");
        return <div className={`cell ${class_name}`}></div>;
    }
}
