import React from "react";
import { TableCell } from "@material-ui/core";

import { setupLimits } from "../../data/database.json";
import Abbr from "../../shared/abbreviation/components/Abbr";
import { generateDomColorizer } from "../../shared/colorization/colorizer";

export function generateGroupHeader(group) {
  return (
    <TableCell colSpan={group.fields.length} key={group.id}>
      {group.description}
    </TableCell>
  );
}

export function generateFieldHeaders(group) {
  return group.fields.map(field => (
    <TableCell key={`${group.id}${field.id}`}>
      <Abbr title={field.description}>{field.abbreviation}</Abbr>
    </TableCell>
  ));
}

export function generateCells(group, setup) {
  const data = setup.data[group.id];
  const limits = setupLimits[group.id];
  return group.fields.map(field => {
    const colorizer = generateDomColorizer(
      limits[field.id].min,
      limits[field.id].max,
      limits[field.id].inverted
    );
    return (
      <TableCell key={`${setup.id}${field.id}`}>
        {colorizer(data[field.id])}
      </TableCell>
    );
  });
}
