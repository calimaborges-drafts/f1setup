import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import SetupPage from "./components/SetupPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <SetupPage />
      </Fragment>
    );
  }
}

export default App;
