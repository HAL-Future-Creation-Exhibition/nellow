import * as React from "react";
import ToggleButton from "../modules/botton";

interface Props {
  updateSleepStatus: (status: boolean) => any;
  sleeping: boolean;
}

export default class Sleep extends React.Component<Props> {
  componentDidMount() {
    console.log("component did mount")
  }
  render() {
    return (
      <>
        <h1>Sleeping</h1>
        <ToggleButton sleeping={this.props.sleeping} updateSleepStatus={this.props.updateSleepStatus} />
      </>
    )
  }
}