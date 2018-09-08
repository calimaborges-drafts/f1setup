import React from "react";
import { TableCell } from "@material-ui/core";

import { setupLimits } from "../setup-data";
import Abbr from "../../shared/abbreviation/components/Abbr";
import { generateDomColorizer } from "../../shared/colorization/colorizer";
import { camelCase, pascalCase } from "change-case";

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
  return group.fields.map(field => {
    const fieldName = `${camelCase(group.id)}${pascalCase(field.id)}`;
    const { min, max, inverted } = setupLimits[fieldName];
    const colorizer = generateDomColorizer(min, max, inverted);
    return (
      <TableCell key={`${setup.id}${field.id}`}>
        {colorizer(setup[fieldName])}
      </TableCell>
    );
  });
}
