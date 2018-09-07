import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  formGroup: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function GenericFormGroup({ title, children, ...props }) {
  return (
    <Paper {...props}>
      <Typography variant="headline" component="h3">
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

class SetupEdit extends Component {
  state = {
    aerodynamicsFrontWingAero: 0,
    aerodynamicsRearWingAero: 0
  };

  _handleChange = fieldId => event =>
    this.setState({
      [fieldId]: event.target.value
    });

  createGenericTextField(fieldId, fieldLabel) {
    const { classes } = this.props;
    return (
      <TextField
        id={fieldId}
        label={fieldLabel}
        value={this.state[fieldId]}
        onChange={this._handleChange(fieldId)}
        margin="normal"
        classes={classes.textField}
      />
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <GenericFormGroup title="Aerodynamics" className={classes.formGroup}>
          {this.createGenericTextField(
            "aerodynamicsFrontWingAero",
            "Front Wing Aero"
          )}
        </GenericFormGroup>
      </form>
    );
  }
}

export default withStyles(styles)(SetupEdit);
