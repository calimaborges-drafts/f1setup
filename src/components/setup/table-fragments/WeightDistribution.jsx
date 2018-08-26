import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function WeightDistributionHeaders() {
  return (
    <Fragment>
      <TableCell>
        <abbr title="Ballast">B</abbr>
      </TableCell>
    </Fragment>
  );
}

export function WeightDistributionCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.data.weightDistribution.ballast}</TableCell>
    </Fragment>
  );
}
