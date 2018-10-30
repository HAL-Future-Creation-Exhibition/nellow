import * as React from "react";

// components
import Sleep from "./pages/sleep";
import Stayup from "./pages/stayup";
import Header from "./modules/Header";

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
    const Comp = this.state.sleeping ? Sleep : Stayup;
    return (
      <div className={`app-container ${this.state.sleeping ? 'sleep' : 'stayup'}`}>
        <Header status={this.state.sleeping} />
        {/* <Bank /> */}
        <Comp />
        {/* <ToggleButton sleeping={this.state.sleeping} updateSleepStatus={this.updateSleepStatus}  /> */}
      </div>
    )
  }
}