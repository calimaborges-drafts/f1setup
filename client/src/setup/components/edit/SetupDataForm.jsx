import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

import FormGroup from "./FormGroup";
import { setupMetadata, generateFieldName } from "../../setup-data";

import { styles } from "./SetupEdit.css";

class SetupDataForm extends React.Component {
  _createTextField(id, label, helperText) {
    const { classes, handleChange } = this.props;
    return (
      <TextField
        fullWidth
        type="number"
        key={id}
        id={id}
        label={label}
        value={this.props[id]}
        onChange={handleChange(id, true)}
        className={classes.textField}
        helperText={<small>{helperText}</small>}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        {setupMetadata.map(group => (
          <FormGroup key={group.id} title={group.description}>
            {group.fields.map(field =>
              this._createTextField(
                generateFieldName(group, field),
                field.abbreviation,
                field.description
              )
            )}
          </FormGroup>
        ))}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SetupDataForm);
