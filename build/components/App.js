"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// components
const sleep_1 = require("./pages/sleep");
const stayup_1 = require("./pages/stayup");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateSleepStatus = (status) => () => {
            this.setState({
                sleeping: status
            });
        };
        this.state = {
            sleeping: false
        };
    }
    render() {
        return this.state.sleeping ? React.createElement(sleep_1.default, { sleeping: this.state.sleeping, updateSleepStatus: this.updateSleepStatus }) : React.createElement(stayup_1.default, { sleeping: this.state.sleeping, updateSleepStatus: this.updateSleepStatus });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map