import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function AerodynamicsHeaders() {
  return (
    <Fragment>
      <TableCell>
        <abbr title="Front Wing Aero">FWA</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Rear Wing Aero">RWA</abbr>
      </TableCell>
    </Fragment>
  );
}

export function AerodynamicsCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.aerodynamics.frontWingAero}</TableCell>
      <TableCell>{setup.data.aerodynamics.rearWingAero}</TableCell>
    </Fragment>
  );
}
