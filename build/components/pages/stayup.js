"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const botton_1 = require("../modules/botton");
class Stayup extends React.Component {
    componentDidMount() {
        console.log("component did mount");
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "stay up now"),
            React.createElement(botton_1.default, { sleeping: this.props.sleeping, updateSleepStatus: this.props.updateSleepStatus })));
    }
}
exports.default = Stayup;
//# sourceMappingURL=stayup.js.map