import React, { Component } from "react";
import BasicPageLayout from "../BasicPageLayout";
import SetupList from "./SetupList";

import { setups, setupLimits } from "../../data/database";

class SetupPage extends Component {
  render() {
    return (
      <BasicPageLayout>
        <SetupList setups={setups} setupLimits={setupLimits} />
      </BasicPageLayout>
    );
  }
}

export default SetupPage;
