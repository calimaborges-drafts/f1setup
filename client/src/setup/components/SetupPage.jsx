import React, { Component } from "react";
import Parse from "parse";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import BasicPageLayout from "../../shared/layout/components/BasicPageLayout";
import SetupList from "./SetupList";

import { defaultSetups, setupLimits } from "../setup-data";
import { Setup } from "../setup-repository";
import SetupEdit from "./edit/SetupEdit";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 999
  },
  container: {
    marginBottom: theme.spacing.unit * 10
  }
});

class SetupPage extends Component {
  state = { setups: defaultSetups, editing: false, setupToEdit: null };

  async componentDidMount() {
    return this._refresh();
  }

  async _refresh() {
    const query = new Parse.Query(Setup);
    const setups = await query.find();
    this.setState({
      setups: [
        ...defaultSetups,
        ...setups.map(setup => ({ id: setup.id, ...setup.toJSON() }))
      ]
    });
  }

  _onShowEdit = id => {
    const setupToEdit = id
      ? this.state.setups.filter(setup => setup.id === id)[0]
      : null;
    this.setState({ setupToEdit, editing: true });
  };

  _saveSetup = async setupData => {
    const setup = new Setup();
    this.setState({ setupToEdit: null, editing: false });
    await setup.save(setupData);
    this._refresh();
  };

  render() {
    const { classes } = this.props;
    return (
      <BasicPageLayout>
        <div className={classes.container}>
          <Button
            variant="fab"
            className={classes.fab}
            color="primary"
            onClick={() => this._onShowEdit(null)}
          >
            <AddIcon />
          </Button>
          {this.state.editing && (
            <SetupEdit
              isOpened={this.state.editing}
              onEdit={this._onEdit}
              onClose={() => this.setState({ editing: false })}
              onSave={this._saveSetup}
              editing={this.state.setupToEdit}
            />
          )}
          <SetupList
            setups={this.state.setups}
            onEdit={this._onShowEdit}
            setupLimits={setupLimits}
          />
        </div>
      </BasicPageLayout>
    );
  }
}

export default withStyles(styles)(SetupPage);
