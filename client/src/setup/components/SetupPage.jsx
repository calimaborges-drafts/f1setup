import React, { Component, Fragment } from "react";
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
  }
});

class SetupPage extends Component {
  state = { setups: defaultSetups, editing: false };

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

  _toggleEdit = editing => () => this.setState({ editing });

  render() {
    const { classes } = this.props;
    return (
      <BasicPageLayout>
        {this.state.setups === null ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            <Button
              variant="fab"
              className={classes.fab}
              color="primary"
              onClick={this._toggleEdit(true)}
            >
              <AddIcon />
            </Button>
            <SetupEdit
              isOpened={this.state.editing}
              onClose={this._toggleEdit(false)}
            />
            <SetupList setups={this.state.setups} setupLimits={setupLimits} />
          </Fragment>
        )}
      </BasicPageLayout>
    );
  }
}

export default withStyles(styles)(SetupPage);
