import * as React from "react";

// components
import Sleep from "./pages/sleep";
import Stayup from "./pages/stayup";
import Header from "./modules/Header";
import Bank from "./pages/bank";
import Settings from "./pages/settings";

import { BrowserRouter, Route, Switch } from "react-router-dom";

interface State {
  sleeping: boolean;
  isShowBackButton: boolean;
}

export default class App extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      sleeping: false,
      isShowBackButton: false
    }
  }

  updateSleepStatus = (status: boolean) => () => {
    this.setState({
      sleeping: status
    })
  };

  backButtonHandler = (show: boolean) => {
    this.setState({
      isShowBackButton: show
    })
  }

  render() {
    const Comp = this.state.sleeping ? Sleep : Stayup;
    return (
      <div className={`app-container ${this.state.sleeping ? 'sleep' : 'stayup'}`}>
        <Header status={this.state.sleeping} isShowBackButton={this.state.isShowBackButton} />
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" render={() => <Comp backButtonHandler={this.backButtonHandler} />} />
            <Route exact={true} path="/bank" render={() => <Bank backButtonHandler={this.backButtonHandler} />} />
            <Route exact={true} path="/settings" render={() => <Settings backButtonHandler={this.backButtonHandler} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}