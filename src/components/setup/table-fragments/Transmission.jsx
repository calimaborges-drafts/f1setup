import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

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
        <abbr title="Differential Adjustments On Throttle">DAONT</abbr>
      </TableCell>
      <TableCell>
        <abbr title="Differential Adjustments Off Throttle">DAOFT</abbr>
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
