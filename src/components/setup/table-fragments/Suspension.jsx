import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import { generateDomColorizer } from "../../../libs/colorizer";
import { setupLimits } from "../../../data/database";

const {
  frontSuspension: frontSuspensionLimit,
  rearSuspension: rearSuspensionLimit,
  frontAntiRollBar: frontAntiRollBarLimit,
  rearAntiRollBar: rearAntiRollBarLimit,
  frontRideHeight: frontRideHeightLimit,
  rearRideHeight: rearRideHeightLimit
} = setupLimits.suspension;

const frontSuspensionColorizer = generateDomColorizer(
  frontSuspensionLimit.min,
  frontSuspensionLimit.max,
  true
);
const rearSuspensionColorizer = generateDomColorizer(
  rearSuspensionLimit.min,
  rearSuspensionLimit.max,
  true
);
const frontAntiRollBarColorizer = generateDomColorizer(
  frontAntiRollBarLimit.min,
  frontAntiRollBarLimit.max
);
const rearAntiRollBarColorizer = generateDomColorizer(
  rearAntiRollBarLimit.min,
  rearAntiRollBarLimit.max
);
const frontRideHeightColorizer = generateDomColorizer(
  frontRideHeightLimit.min,
  frontRideHeightLimit.max
);
const rearRideHeightColorizer = generateDomColorizer(
  rearRideHeightLimit.min,
  rearRideHeightLimit.max
);

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
  const {
    frontSuspension,
    rearSuspension,
    frontAntiRollBar,
    rearAntiRollBar,
    frontRideHeight,
    rearRideHeight
  } = setup.data.suspension;
  return (
    <Fragment>
      <TableCell>{frontSuspensionColorizer(frontSuspension)}</TableCell>
      <TableCell>{rearSuspensionColorizer(rearSuspension)}</TableCell>
      <TableCell>{frontAntiRollBarColorizer(frontAntiRollBar)}</TableCell>
      <TableCell>{rearAntiRollBarColorizer(rearAntiRollBar)}</TableCell>
      <TableCell>{frontRideHeightColorizer(frontRideHeight)}</TableCell>
      <TableCell>{rearRideHeightColorizer(rearRideHeight)}</TableCell>
    </Fragment>
  );
}
