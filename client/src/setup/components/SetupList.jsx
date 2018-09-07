import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { setupMetadata } from "../setup-metadata";

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
    }
  };
};

class SetupList extends Component {
  render() {
    const { classes, setups } = this.props;
    const setupGroupHeaders = setupMetadata.map(generateGroupHeader);
    const setupFieldHeaders = setupMetadata.map(generateFieldHeaders);
    return (
      <Paper className={classes.root} square>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5}>Basic Data</TableCell>
              {setupGroupHeaders}
            </TableRow>
            <TableRow>
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
                  <BasicDataCells setup={setup} />
                  {setupFieldCells}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SetupList);
