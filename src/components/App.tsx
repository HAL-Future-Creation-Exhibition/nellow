import * as React from "react";
import http from "../api/http";
import db from "../lib/db";

// components
import Sleep from "./pages/sleep";
import Stayup from "./pages/stayup";
import Bank from "./pages/bank";
import Settings from "./pages/settings";
import OnBording from "./pages/Onbording";
import NotFound from "./pages/NotFound";
import Clear from "./pages/Clear";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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

  componentDidMount() {
    window.addEventListener("deviceorientation", this.deviceorientationHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation", this.deviceorientationHandler);
  }

  updateSleepStatus = (status: boolean) => () => {
    this.setState({
      sleeping: status
    })
  };

  deviceorientationHandler = async (e) => {
    if(location.pathname !== "/") return;

    const user = db.getUser();
    let { beta } = e;
    if(beta < 0) {
      beta *= -1;
    }

    const isSleeping = !!(beta >= 150);
    if(isSleeping === this.state.sleeping) return;

    if(isSleeping) {
      await http.sleep(user.id);
    } else {
      await http.wakeup(user.id);
    }
    this.setState({
      sleeping: isSleeping
    })
  }

  render() {
    const Comp = this.state.sleeping ? Sleep : Stayup;
    return (
      <div className={`app-container ${this.state.sleeping ? 'sleep' : 'stayup'}`}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Comp} />
            <Route exact={true} path="/bank" component={Bank} />
            <Route exact={true} path="/settings" component={Settings} />
            <Route exact={true} path="/user/create" component={OnBording} />
            <Route exact={true} path="/nellow/create" component={OnBording} />
            <Route exact={true} path="/cl" component={Clear} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}