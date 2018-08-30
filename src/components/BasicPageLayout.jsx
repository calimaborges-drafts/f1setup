import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { version } from "../../package.json";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    paddingTop: "80px"
  }
});

function BasicPageLayout({ title, classes, toolbarChildren, children }) {
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            {toolbarChildren}
            <Typography variant="title" color="inherit">
              {title || `F1 Setup Manager ${version}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>{children}</div>
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(BasicPageLayout);
