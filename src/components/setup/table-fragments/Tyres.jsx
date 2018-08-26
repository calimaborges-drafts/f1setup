import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function TyresHeaders() {
  return (
    <Fragment>
      <TableCell>
        <abbr title="Front Tyre Pressure">FTP</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Rear Tyre Bias">RTP</abbr>
      </TableCell>
    </Fragment>
  );
}

export function TyresCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.tyres.frontTyrePressure}</TableCell>
      <TableCell>{setup.data.tyres.rearTyrePressure}</TableCell>
    </Fragment>
  );
}
