import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { styles } from "./SetupEdit.css";
import SetupDataForm from "./SetupDataForm";
import FormGroup from "./FormGroup";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { setupWeathers, setupTeams, setupTracks } from "../../setup-data";

function appendAny(list, descriptionName = "description") {
  return [{ id: 0, [descriptionName]: "Any" }, ...list];
}

class SetupEdit extends Component {
  state = {
    weather: 0,
    team: 0,
    track: 0
  };

  _handleChange = fieldId => event =>
    this.setState({
      [fieldId]: event.target.value
    });

  _createFormSelect(id, label, list) {
    const { classes } = this.props;
    return (
      <FormControl fullWidth className={classes.textField}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          value={this.state[id]}
          onChange={this._handleChange(id)}
          inputProps={{ name: id, id }}
        >
          {appendAny(list).map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  render() {
    const { classes, isOpened, onClose, onSave } = this.props;
    return (
      <Dialog fullScreen open={isOpened}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={onClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.toolbar}
            >
              New Setup
            </Typography>
            <Button color="inherit" onClick={onSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form className={classes.container} noValidate autoComplete="off">
          <FormGroup title="Basic data">
            <TextField
              fullWidth
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this._handleChange("name")}
              className={classes.textField}
            />
            {this._createFormSelect("team", "Team", setupTeams)}
            {this._createFormSelect("track", "Track", setupTracks)}
            {this._createFormSelect("weather", "Weather", setupWeathers)}
          </FormGroup>
          <SetupDataForm handleChange={this._handleChange} />
        </form>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SetupEdit);
