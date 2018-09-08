import React, { Component } from "react";
import Parse from "parse";

import BasicPageLayout from "../../shared/layout/components/BasicPageLayout";
import SetupList from "./SetupList";

import { defaultSetups, setupLimits } from "../setup-data";
import { Setup } from "../setup-repository";

class SetupPage extends Component {
  state = { setups: defaultSetups };

  async componentDidMount() {
    const query = new Parse.Query(Setup);
    const setups = await query.find();
    this.setState({
      setups: [
        ...defaultSetups,
        ...setups.map(setup => ({ id: setup.id, ...setup.toJSON() }))
      ]
    });
  }

  render() {
    console.log(this.state.setups);
    return (
      <BasicPageLayout>
        {this.state.setups === null ? (
          <h1>Loading</h1>
        ) : (
          <SetupList setups={this.state.setups} setupLimits={setupLimits} />
        )}
      </BasicPageLayout>
    );
  }
}

export default SetupPage;
