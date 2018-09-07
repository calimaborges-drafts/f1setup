import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

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
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {toolbarChildren}
          <Typography variant="title" color="inherit">
            {title || `F1 Setup Manager`}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default withStyles(styles)(BasicPageLayout);
