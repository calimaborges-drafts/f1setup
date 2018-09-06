import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import Abbr from "../../commons/Abbr";
import { generateDomColorizer } from "../../../shared/colorizer";
import { setupLimits } from "../../../data/database";

const {
  brakePressure: brakePressureLimit,
  frontBrakeBias: frontBrakeBiasLimit
} = setupLimits.brakes;
const brakePressureColorizer = generateDomColorizer(
  brakePressureLimit.min,
  brakePressureLimit.max
);
const frontBrakeBiasColorizer = generateDomColorizer(
  frontBrakeBiasLimit.max,
  frontBrakeBiasLimit.min,
  true
);

export function BrakesHeaders() {
  return (
    <Fragment>
      <TableCell>
        <Abbr title="Brake Pressure">BP</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Front Brake Bias">FBP</Abbr>
      </TableCell>
    </Fragment>
  );
}

export function BrakesCells({ setup }) {
  const { brakePressure, frontBrakeBias } = setup.data.brakes;
  return (
    <Fragment>
      <TableCell>{brakePressureColorizer(brakePressure)}</TableCell>
      <TableCell>{frontBrakeBiasColorizer(frontBrakeBias)}</TableCell>
    </Fragment>
  );
}
