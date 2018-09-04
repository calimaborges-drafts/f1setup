import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";

export function BasicDataHeaders() {
  return (
    <Fragment>
      <TableCell>Team</TableCell>
      <TableCell>Track</TableCell>
      <TableCell>Weather</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Time</TableCell>
    </Fragment>
  );
}

export function BasicDataCells({ setup }) {
  return (
    <Fragment>
      <TableCell>{setup.team}</TableCell>
      <TableCell>{setup.track}</TableCell>
      <TableCell>{setup.weather}</TableCell>
      <TableCell>{setup.name}</TableCell>
      <TableCell>{setup.time || "-"}</TableCell>
    </Fragment>
  );
}
