import * as React from "react";
import { hydrate } from "react-dom";
require('onsenui');

import App from "./components/App";

hydrate(
  <App />,
  document.getElementById("app")
);
