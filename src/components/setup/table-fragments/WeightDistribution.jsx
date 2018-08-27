import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import { generateDomColorizer } from "../../../libs/colorizer";
import { setupLimits } from "../../../data/database";

const { ballast: ballastLimit } = setupLimits.weightDistribution;

const ballastColorizer = generateDomColorizer(
  ballastLimit.min,
  ballastLimit.max,
  true
);

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
      <TableCell>
        {ballastColorizer(setup.data.weightDistribution.ballast)}
      </TableCell>
    </Fragment>
  );
}
