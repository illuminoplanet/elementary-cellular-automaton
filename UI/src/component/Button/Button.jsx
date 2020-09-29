import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { pulseStart: 0, pulseReset: 0 };
    }
    render() {
        return (
            <div className="button">
                <button
                    className="button--start"
                    onClick={() => {
                        this.setState({ pulseStart: 1 });
                        this.props.startHandler();
                    }}
                    onAnimationEnd={() => {
                        this.setState({ pulseStart: 0 });
                    }}
                    pulse={this.state.pulseStart}
                ></button>
                <div className="button--start__label">Start</div>
                <button
                    className="button--reset"
                    onClick={() => {
                        this.setState({ pulseReset: 1 });
                        this.props.resetHandler();
                    }}
                    onAnimationEnd={() => {
                        this.setState({ pulseReset: 0 });
                    }}
                    pulse={this.state.pulseReset}
                ></button>
                <div className="button--reset__label">Reset</div>
            </div>
        );
    }
}
