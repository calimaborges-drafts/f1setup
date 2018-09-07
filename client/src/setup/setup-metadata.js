import { abbreviate } from "../shared/abbreviation/abbreviator";
import { camelCase } from "change-case";

class SetupGroup {
  constructor(id, description, fields) {
    this.id = id;
    this.description = description;
    this.fields = fields;
  }
}

class SetupField {
  constructor(id, description, abbreviation, group) {
    this.id = id;
    this.description = description;
    this.abbreviation = abbreviation;
    this.group = group;
  }
}

function generateSetupGroup(description, fields) {
  const id = camelCase(description);
  const group = new SetupGroup(id, description, fields);
  group.fields.forEach(field => (field.group = group));
  return group;
}

function generateSetupField(description, abbreviation) {
  const id = camelCase(description);
  const abbr = abbreviation || abbreviate(description);
  return new SetupField(id, description, abbr);
}

export const setupMetadata = [
  generateSetupGroup("Aerodynamics", [
    generateSetupField("Front Wing Aero"),
    generateSetupField("Rear Wing Aero")
  ]),
  generateSetupGroup("Brakes", [
    generateSetupField("Brake Pressure"),
    generateSetupField("Front Brake Bias")
  ]),
  generateSetupGroup("Suspension", [
    generateSetupField("Front Suspension"),
    generateSetupField("Rear Suspension"),
    generateSetupField("Front Anti Roll Bar"),
    generateSetupField("Rear Anti Roll Bar"),
    generateSetupField("Front Ride Height"),
    generateSetupField("Rear Ride Height")
  ]),
  generateSetupGroup("Suspension Geometry", [
    generateSetupField("Front Camber"),
    generateSetupField("Rear Camber"),
    generateSetupField("Front Toe"),
    generateSetupField("Rear Toe")
  ]),
  generateSetupGroup("Transmission", [
    generateSetupField("Differential Adjustments On Throttle", "DAONT"),
    generateSetupField("Differential Adjustments Off Throttle", "DAOFT")
  ]),
  generateSetupGroup("Tyres", [
    generateSetupField("Front Tyre Pressure"),
    generateSetupField("Rear Tyre Pressure")
  ]),
  generateSetupGroup("Weight Distribution", [generateSetupField("Ballast")])
];
