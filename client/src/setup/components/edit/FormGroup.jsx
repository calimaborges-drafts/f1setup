import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

import { styles } from "./SetupEdit.css";

function FormGroup({ title, classes, children }) {
  return (
    <div className={classes.formGroup}>
      <Typography className={classes.formGroup.title}>{title}</Typography>
      <div className={classes.inputControl}>{children}</div>
    </div>
  );
}

export default withStyles(styles)(FormGroup);
