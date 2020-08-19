import React, { Component } from "react";
import ToggleButton from "./ToggleButton";
import "./Drawer.css";

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            drawerWindowPattern: [],
            drawerWindowButton: [],
            currentRules: [0, 0, 0, 0, 0, 0, 0, 0],
            rule: 0,
        };
    }
    rulesSetHandler = (idx) => {
        const { currentRules } = this.state;
        currentRules[idx] = 1 - currentRules[idx];
        const binary = [128, 64, 32, 16, 8, 4, 2, 1];
        let rule = 0;
        for (let i = 0; i < 8; i++) {
            rule += binary[i] * currentRules[i];
        }
        this.setState({ currentRules, rule });
    };
    drawerToggleHandler = () => {
        this.setState(() => {
            return { drawerOpen: !this.state.drawerOpen };
        });
    };
    updateDrawerWindowPattern = () => {
        const drawerWindowPattern = [];
        for (let i = 0; i < 8; i++) {
            const currentPattern = [];
            const pattern = (7 - i).toString(2).padStart(3);
            for (let j = 0; j < 3; j++) {
                const className =
                    "drawer__window__block--" +
                    (pattern[j] === "1" ? "live" : "dead");
                currentPattern.push(<div className={className} key={j}></div>);
            }
            drawerWindowPattern.push(currentPattern);
        }
        this.setState({ drawerWindowPattern });
    };
    updateDrawerWindowButton = () => {
        const drawerWindowButton = [];
        for (let i = 0; i < 8; i++) {
            drawerWindowButton.push(
                <label className="drawer__window__container" key={i}>
                    <input
                        type="checkbox"
                        key={i}
                        onClick={() => {
                            this.rulesSetHandler(i);
                        }}
                    ></input>
                    <span className="checkmark"></span>
                </label>
            );
        }
        this.setState({ drawerWindowButton });
    };
    componentDidMount() {
        this.updateDrawerWindowPattern();
        this.updateDrawerWindowButton();
    }
    render() {
        const backdrop = this.state.drawerOpen ? (
            <button
                className="drawer__backdrop"
                onClick={() => {
                    this.drawerToggleHandler();
                    this.props.rulesSetHandler(this.state.currentRules);
                }}
            ></button>
        ) : null;
        return (
            <div className="drawer">
                {backdrop}
                <div className="drawer__toggle-button">
                    <ToggleButton
                        openDrawer={this.drawerToggleHandler}
                    ></ToggleButton>
                </div>
                <div className="drawer__window" open={this.state.drawerOpen}>
                    <div className="drawer__window__title">
                        <div>Set Rules</div>
                    </div>
                    <div className="drawer__window__pattern">
                        {this.state.drawerWindowPattern}
                    </div>
                    <div
                        className="drawer__window__line"
                        style={{ top: 190 }}
                    ></div>
                    <div
                        className="drawer__window__line"
                        style={{ bottom: 90 }}
                    ></div>
                    <div
                        className="drawer__window__arrow"
                        style={{ degree: 30 }}
                    ></div>
                    <div className="drawer__window__button">
                        {this.state.drawerWindowButton}
                    </div>
                    <div className="drawer__window__rule">
                        Rule {this.state.rule}
                    </div>
                </div>
            </div>
        );
    }
}
