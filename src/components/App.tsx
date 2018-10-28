import * as React from "react";

// components
import Sleep from "./pages/sleep";
import Stayup from "./pages/stayup";

interface State {
  sleeping: boolean;
}

export default class App extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      sleeping: false
    }
  }

  updateSleepStatus = (status: boolean) => () => {
    this.setState({
      sleeping: status
    })
  };

  render() {
    return this.state.sleeping ? <Sleep sleeping={this.state.sleeping} updateSleepStatus={this.updateSleepStatus} /> : <Stayup sleeping={this.state.sleeping} updateSleepStatus={this.updateSleepStatus} />;
  }
}