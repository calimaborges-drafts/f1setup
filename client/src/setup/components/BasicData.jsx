import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import {
  findSetupWeatherById,
  findSetupTeamById,
  findSetupTrackById
} from "../setup-data";

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
      <TableCell>{findSetupTeamById(setup.team).name}</TableCell>
      <TableCell>{findSetupTrackById(setup.track).description}</TableCell>
      <TableCell>{findSetupWeatherById(setup.weather).description}</TableCell>
      <TableCell>{setup.name}</TableCell>
      <TableCell>{setup.time || "-"}</TableCell>
    </Fragment>
  );
}
