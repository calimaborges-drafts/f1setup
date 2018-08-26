import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { BasicDataHeaders, BasicDataCells } from "./table-fragments/BasicData";
import {
  AerodynamicsCells,
  AerodynamicsHeaders
} from "./table-fragments/Aerodynamics";
import {
  TransmissionHeaders,
  TransmissionCells
} from "./table-fragments/Transmission";
import {
  SuspensionGeometryHeaders,
  SuspensionGeometryCells
} from "./table-fragments/SuspensionGeometry";
import {
  SuspensionHeaders,
  SuspensionCells
} from "./table-fragments/Suspension";
import { BrakesCells, BrakesHeaders } from "./table-fragments/Brakes";
import { TyresCells, TyresHeaders } from "./table-fragments/Tyres";
import {
  WeightDistributionHeaders,
  WeightDistributionCells
} from "./table-fragments/WeightDistribution";

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
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5}>Basic Data</TableCell>
              <TableCell colSpan={2}>Aerodynamics</TableCell>
              <TableCell colSpan={2}>Transmission</TableCell>
              <TableCell colSpan={4}>Suspension Geometry</TableCell>
              <TableCell colSpan={6}>Suspension</TableCell>
              <TableCell colSpan={2}>Brakes</TableCell>
              <TableCell colSpan={2}>Tyres</TableCell>
              <TableCell colSpan={1}>Weight Distribution</TableCell>
            </TableRow>
            <TableRow>
              <BasicDataHeaders />
              <AerodynamicsHeaders />
              <TransmissionHeaders />
              <SuspensionGeometryHeaders />
              <SuspensionHeaders />
              <BrakesHeaders />
              <TyresHeaders />
              <WeightDistributionHeaders />
            </TableRow>
          </TableHead>
          <TableBody>
            {setups.map(setup => {
              return (
                <TableRow key={setup.id}>
                  <BasicDataCells setup={setup} />
                  <AerodynamicsCells setup={setup} />
                  <TransmissionCells setup={setup} />
                  <SuspensionGeometryCells setup={setup} />
                  <SuspensionCells setup={setup} />
                  <BrakesCells setup={setup} />
                  <TyresCells setup={setup} />
                  <WeightDistributionCells setup={setup} />
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
