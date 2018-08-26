import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function SuspensionHeaders() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export function SuspensionCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.suspension.frontSuspension}</TableCell>
      <TableCell>{setup.data.suspension.rearSuspension}</TableCell>
      <TableCell>{setup.data.suspension.frontAntiRollBar}</TableCell>
      <TableCell>{setup.data.suspension.rearAntiRollBar}</TableCell>
      <TableCell>{setup.data.suspension.frontRideHeight}</TableCell>
      <TableCell>{setup.data.suspension.rearRideHeight}</TableCell>
    </Fragment>
  );
}
