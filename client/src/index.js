import React from "react";
import ReactDOM from "react-dom";
import Parse from "parse";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Parse.initialize("f1setup-api");
Parse.serverURL = "https://f1setup-api.now.sh/parse";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
