import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import { generateDomColorizer } from "../../../libs/colorizer";
import { setupLimits } from "../../../data/database";

const {
  frontCamber: frontCamberLimit,
  rearCamber: rearCamberLimit,
  frontToe: frontToeLimit,
  rearToe: rearToeLimit
} = setupLimits.suspensionGemoetry;
const frontCamberColorizer = generateDomColorizer(
  frontCamberLimit.min,
  frontCamberLimit.max
);
const rearCamberColorizer = generateDomColorizer(
  rearCamberLimit.min,
  rearCamberLimit.max
);
const frontToeColorizer = generateDomColorizer(
  frontToeLimit.min,
  frontToeLimit.max,
  true
);
const rearToeColorizer = generateDomColorizer(
  rearToeLimit.min,
  rearToeLimit.max
);

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
  const {
    frontCamber,
    rearCamber,
    frontToe,
    rearToe
  } = setup.data.suspensionGemoetry;
  return (
    <Fragment>
      <TableCell>{frontCamberColorizer(frontCamber)}</TableCell>
      <TableCell>{rearCamberColorizer(rearCamber)}</TableCell>
      <TableCell>{frontToeColorizer(frontToe)}</TableCell>
      <TableCell>{rearToeColorizer(rearToe)}</TableCell>
    </Fragment>
  );
}
