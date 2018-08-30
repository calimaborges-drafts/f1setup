import React, { Component } from "react";
import Router from "next/router";

import BasicPageLayout from "../BasicPageLayout";
import { withStyles } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class AboutPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BasicPageLayout
        toolbarChildren={
          <IconButton
            className={classes.menuButton}
            color="inherit"
            ariaLabel="Voltar"
            onClick={() => Router.push("/")}
          >
            <ArrowBack />
          </IconButton>
        }
      />
    );
  }
}

export default withStyles(styles)(AboutPage);
