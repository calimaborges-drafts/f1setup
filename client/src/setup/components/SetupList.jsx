import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import EditButton from "@material-ui/icons/Edit";

import { setupMetadata } from "../setup-data";
import { BasicDataHeaders, BasicDataCells } from "./BasicData";
import {
  generateCells,
  generateGroupHeader,
  generateFieldHeaders
} from "./SetupTableGenerator";

const styles = theme => {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    actionButton: {
      margin: theme.spacing.unit / 2,
      width: "2rem",
      height: "2rem"
    },
    actionButtonIcon: {
      width: "1rem",
      height: "1rem"
    }
  };
};

class SetupList extends Component {
  render() {
    const { classes, setups, onEdit } = this.props;
    const setupGroupHeaders = setupMetadata.map(generateGroupHeader);
    const setupFieldHeaders = setupMetadata.map(generateFieldHeaders);
    return (
      <React.Fragment>
        <Paper className={classes.root} square>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={1}>Actions</TableCell>
                <TableCell colSpan={5}>Basic Data</TableCell>
                {setupGroupHeaders}
              </TableRow>
              <TableRow>
                <TableCell />
                <BasicDataHeaders />
                {setupFieldHeaders}
              </TableRow>
            </TableHead>
            <TableBody>
              {setups.map(setup => {
                const setupFieldCells = setupMetadata.map(group =>
                  generateCells(group, setup)
                );
                return (
                  <TableRow key={setup.id}>
                    <TableCell>
                      {!setup.isDefault && (
                        <IconButton
                          className={classes.actionButton}
                          aria-label="Edit"
                          onClick={() => onEdit(setup.id)}
                        >
                          <EditButton className={classes.actionButtonIcon} />
                        </IconButton>
                      )}
                    </TableCell>
                    <BasicDataCells setup={setup} />
                    {setupFieldCells}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SetupList);
