"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const botton_1 = require("../modules/botton");
class Sleep extends React.Component {
    componentDidMount() {
        console.log("component did mount");
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Sleeping"),
            React.createElement(botton_1.default, { sleeping: this.props.sleeping, updateSleepStatus: this.props.updateSleepStatus })));
    }
}
exports.default = Sleep;
//# sourceMappingURL=sleep.js.map