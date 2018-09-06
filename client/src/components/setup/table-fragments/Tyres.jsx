import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import Abbr from "../../shared/Abbr";
import { generateDomColorizer } from "../../../shared/colorizer";
import { setupLimits } from "../../../data/database";

const {
  frontTyrePressure: frontTyrePressureLimit,
  rearTyrePressure: rearTyrePressureLimit
} = setupLimits.tyres;

const frontTyrePressureColorizer = generateDomColorizer(
  frontTyrePressureLimit.min,
  frontTyrePressureLimit.max,
  true
);
const rearTyrePressureColorizer = generateDomColorizer(
  rearTyrePressureLimit.min,
  rearTyrePressureLimit.max,
  true
);

export function TyresHeaders() {
  return (
    <Fragment>
      <TableCell>
        <Abbr title="Front Tyre Pressure">FTP</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Rear Tyre Bias">RTP</Abbr>
      </TableCell>
    </Fragment>
  );
}

export function TyresCells({ setup }) {
  const { frontTyrePressure, rearTyrePressure } = setup.data.tyres;
  return (
    <Fragment>
      <TableCell>{frontTyrePressureColorizer(frontTyrePressure)}</TableCell>
      <TableCell>{rearTyrePressureColorizer(rearTyrePressure)}</TableCell>
    </Fragment>
  );
}
