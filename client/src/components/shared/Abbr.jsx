import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const styles = {
  abbr: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    userSelect: "none"
  }
};

function Abbr({ children, title, classes }) {
  return (
    <Tooltip title={title}>
      <span aria-label={title} className={classes.abbr}>
        {children}
      </span>
    </Tooltip>
  );
}

export default withStyles(styles)(Abbr);
