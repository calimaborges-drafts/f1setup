import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function TransmissionHeaders() {
  return (
    <Fragment>
      <TableCell>
        <abbr title="Differential Adjustments On Throttle">DAONT</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Differential Adjustments Off Throttle">DAOFT</abbr>
      </TableCell>
    </Fragment>
  );
}

export function TransmissionCells({ setup }) {
  return (
    <Fragment>
      <TableCell>
        {setup.data.transmission.differentialAdjustmentsOnThrottle}
      </TableCell>
      <TableCell>
        {setup.data.transmission.differentialAdjustmentOffThrottle}
      </TableCell>
    </Fragment>
  );
}
