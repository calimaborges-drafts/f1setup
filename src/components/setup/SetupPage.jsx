import React, { Component } from "react";
import Link from "next/link";
import BasicPageLayout from "../BasicPageLayout";
import SetupList from "./SetupList";

import { setups, setupLimits } from "../../../data/database";

class SetupPage extends Component {
  render() {
    return (
      <BasicPageLayout>
        <Link href="/about">About</Link>
        <SetupList setups={setups} setupLimits={setupLimits} />
      </BasicPageLayout>
    );
  }
}

export default SetupPage;
