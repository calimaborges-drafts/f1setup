import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
              <TableCell>Team</TableCell>
              <TableCell>Track</TableCell>
              <TableCell>Weather</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>

              <TableCell>
                <abbr title="Front Wing Aero">FWA</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Wing Aero">RWA</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Differential Adjustments On Throttle">DAONT</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Differential Adjustments Off Throttle">DAOFT</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Front Camber">FC</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Camber">RC</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Front Toe">FT</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Toe">RT</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Front Suspension">FS</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Suspension">RS</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Front Anti Roll Bar">FARB</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Anti Roll Bar">RARB</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Front Ride Height">FRH</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Ride Height">RRH</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Brake Pressure">BP</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Front Brake Bias">FBP</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Front Tyre Pressure">FTP</abbr>
              </TableCell>
              <TableCell>
                <abbr title="Rear Tyre Bias">RTP</abbr>
              </TableCell>

              <TableCell>
                <abbr title="Ballast">B</abbr>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {setups.map(setup => {
              return (
                <TableRow key={setup.id}>
                  <TableCell>{setup.team}</TableCell>
                  <TableCell>{setup.track}</TableCell>
                  <TableCell>{setup.weather}</TableCell>
                  <TableCell>{setup.name}</TableCell>
                  <TableCell>{setup.time || "-"}</TableCell>

                  <TableCell>{setup.data.aerodynamics.frontWingAero}</TableCell>
                  <TableCell>{setup.data.aerodynamics.rearWingAero}</TableCell>

                  <TableCell>
                    {setup.data.transmission.differentialAdjustmentsOnThrottle}
                  </TableCell>
                  <TableCell>
                    {setup.data.transmission.differentialAdjustmentOffThrottle}
                  </TableCell>

                  <TableCell>
                    {setup.data.suspensionGemoetry.frontCamber}
                  </TableCell>
                  <TableCell>
                    {setup.data.suspensionGemoetry.rearCamber}
                  </TableCell>
                  <TableCell>
                    {setup.data.suspensionGemoetry.frontToe}
                  </TableCell>
                  <TableCell>{setup.data.suspensionGemoetry.rearToe}</TableCell>

                  <TableCell>{setup.data.suspension.frontSuspension}</TableCell>
                  <TableCell>{setup.data.suspension.rearSuspension}</TableCell>
                  <TableCell>
                    {setup.data.suspension.frontAntiRollBar}
                  </TableCell>
                  <TableCell>{setup.data.suspension.rearAntiRollBar}</TableCell>
                  <TableCell>{setup.data.suspension.frontRideHeight}</TableCell>
                  <TableCell>{setup.data.suspension.rearRideHeight}</TableCell>

                  <TableCell>{setup.data.brakes.brakePressure}</TableCell>
                  <TableCell>{setup.data.brakes.frontBrakeBias}</TableCell>

                  <TableCell>{setup.data.tyres.frontTyrePressure}</TableCell>
                  <TableCell>{setup.data.tyres.rearTyrePressure}</TableCell>

                  <TableCell>{setup.data.weightDistribution.ballast}</TableCell>
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
