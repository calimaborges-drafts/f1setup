import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

import Abbr from "../../commons/Abbr";
import { generateDomColorizer } from "../../../libs/colorizer";
import { setupLimits } from "../../../data/database";

const {
  differentialAdjustmentsOnThrottle: differentialAdjustmentsOnThrottleLimit,
  differentialAdjustmentOffThrottle: differentialAdjustmentOffThrottleLimit
} = setupLimits.transmission;
const differentialAdjustmentsOnThrottleColorizer = generateDomColorizer(
  differentialAdjustmentsOnThrottleLimit.min,
  differentialAdjustmentsOnThrottleLimit.max
);
const differentialAdjustmentOffThrottleColorizer = generateDomColorizer(
  differentialAdjustmentOffThrottleLimit.min,
  differentialAdjustmentOffThrottleLimit.max
);

export function TransmissionHeaders() {
  return (
    <Fragment>
      <TableCell>
        <Abbr title="Differential Adjustments On Throttle">DAONT</Abbr>
      </TableCell>
      <TableCell>
        <Abbr title="Differential Adjustments Off Throttle">DAOFT</Abbr>
      </TableCell>
    </Fragment>
  );
}

export function TransmissionCells({ setup }) {
  const {
    differentialAdjustmentsOnThrottle,
    differentialAdjustmentOffThrottle
  } = setup.data.transmission;
  return (
    <Fragment>
      <TableCell>
        {differentialAdjustmentsOnThrottleColorizer(
          differentialAdjustmentsOnThrottle
        )}
      </TableCell>
      <TableCell>
        {differentialAdjustmentOffThrottleColorizer(
          differentialAdjustmentOffThrottle
        )}
      </TableCell>
    </Fragment>
  );
}
