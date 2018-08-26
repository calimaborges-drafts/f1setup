import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function BrakesHeaders() {
  return (
    <Fragment>
      <TableCell>
        <abbr title="Brake Pressure">BP</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Front Brake Bias">FBP</abbr>
      </TableCell>
    </Fragment>
  );
}

export function BrakesCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.brakes.brakePressure}</TableCell>
      <TableCell>{setup.data.brakes.frontBrakeBias}</TableCell>
    </Fragment>
  );
}
