import * as React from "react";

interface Props {
  updateSleepStatus: (status: boolean) => any;
  sleeping: boolean;
}

export default class Button extends React.Component<Props> {

  render() {
    return (
      <button onClick={this.props.updateSleepStatus(!this.props.sleeping)}>{this.props.sleeping ? "起きる" : "寝る"}</button>
    )
  }

}