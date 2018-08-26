import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function SuspensionGeometryHeaders() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export function SuspensionGeometryCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.suspensionGemoetry.frontCamber}</TableCell>
      <TableCell>{setup.data.suspensionGemoetry.rearCamber}</TableCell>
      <TableCell>{setup.data.suspensionGemoetry.frontToe}</TableCell>
      <TableCell>{setup.data.suspensionGemoetry.rearToe}</TableCell>
    </Fragment>
  );
}
