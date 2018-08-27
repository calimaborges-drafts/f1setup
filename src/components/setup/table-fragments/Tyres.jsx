import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import { generateDomColorizer } from "../../../libs/colorizer";
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
        <abbr title="Front Tyre Pressure">FTP</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Rear Tyre Bias">RTP</abbr>
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
