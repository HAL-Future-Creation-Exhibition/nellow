import * as React from "react";

interface Props {
  updateSleepStatus: (status: boolean) => any;
  sleeping: boolean;
}

export default class Button extends React.Component<Props> {

  render() {
    return (
      <button className={`wakeup-sleep-button status-${this.props.sleeping ? 'sleep' : 'stayup'}`} onClick={this.props.updateSleepStatus(!this.props.sleeping)} />
    )
  }

}