import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import Abbr from "../../commons/Abbr";
import { generateDomColorizer } from "../../../shared/colorizer";
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
        <Abbr title="Front Suspension">FS</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Rear Suspension">RS</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Front Anti Roll Bar">FARB</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Rear Anti Roll Bar">RARB</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Front Ride Height">FRH</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Rear Ride Height">RRH</Abbr>
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
