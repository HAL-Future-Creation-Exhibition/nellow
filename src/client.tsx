import * as React from "react";
import { hydrate } from "react-dom";

// if("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js", {scope: '/'}).then(registration => {
//       console.log("SW registered: ", registration);
//     }).catch(registrationError => {
//       console.log("SW registration faild:", registrationError);
//     });
//   });
// }

import App from "./components/App";

hydrate(
  <App />,
  document.getElementById("app")
);
