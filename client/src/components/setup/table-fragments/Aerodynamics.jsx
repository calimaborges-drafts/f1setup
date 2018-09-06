import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import Abbr from "../../shared/Abbr";
import { generateDomColorizer } from "../../../shared/colorizer";
import { setupLimits } from "../../../data/database";

const {
  frontWingAero: frontWingAeroLimit,
  rearWingAero: rearWingAeroLimit
} = setupLimits.aerodynamics;
const frontWingAeroColorizer = generateDomColorizer(
  frontWingAeroLimit.min,
  frontWingAeroLimit.max
);
const rearWingAeroColorizer = generateDomColorizer(
  rearWingAeroLimit.min,
  rearWingAeroLimit.max
);

export function AerodynamicsHeaders() {
  return (
    <Fragment>
      <TableCell>
        <Abbr title="Front Wing Aero">FWA</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Rear Wing Aero">RWA</Abbr>
      </TableCell>
    </Fragment>
  );
}

export function AerodynamicsCells({ setup }) {
  const { frontWingAero, rearWingAero } = setup.data.aerodynamics;
  return (
    <Fragment>
      <TableCell>{frontWingAeroColorizer(frontWingAero)}</TableCell>
      <TableCell>{rearWingAeroColorizer(rearWingAero)}</TableCell>
    </Fragment>
  );
}
