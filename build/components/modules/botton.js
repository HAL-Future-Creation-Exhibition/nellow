"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Button extends React.Component {
    render() {
        return (React.createElement("button", { onClick: this.props.updateSleepStatus(!this.props.sleeping) }, this.props.sleeping ? "起きる" : "寝る"));
    }
}
exports.default = Button;
//# sourceMappingURL=botton.js.map