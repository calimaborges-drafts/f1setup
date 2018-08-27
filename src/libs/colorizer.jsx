import React from "react";
import Avatar from "@material-ui/core/Avatar";

/**
 * Expects to receive a @param(min) and @param(max) range to
 * evaluate the percentage of @param(value) within this range.
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 */
export function percentageInRange(min, max, value) {
  let sanitizedValue = value;

  if (value < min) {
    sanitizedValue = min;
  }

  if (value > max) {
    sanitizedValue = max;
  }

  return (sanitizedValue - min) / (max - min);
}

/**
 * Expects to receive a percentage and will return a color in the format:
 * { red, green, blue }
 *
 * @param {number} percentage
 */
export function percentageToColor(percentage, inverted = false) {
  const maxValue = 200;
  const absolute = Math.floor(percentage * maxValue);
  let green = absolute;
  let red = maxValue - absolute;
  if (inverted) {
    green = maxValue - absolute;
    red = absolute;
  }
  const blue = 100;
  return { red, green, blue };
}

/**
 * Expects to receive a @param(min) and @param(max) range and will return a
 * function to calculate the color more green the bigger the value and
 * more red the lower the value.
 *
 * @param {number} min
 * @param {number} max
 */
export function generateColorizer(min, max, inverted = false) {
  if (min > max || max < min) {
    throw new Error(
      `Max (${max}) value should be bigger than min (${min}) value`
    );
  }

  return function(value) {
    return percentageToColor(percentageInRange(min, max, value), inverted);
  };
}

export function hexalize(number) {
  return number.toString(16).padStart(2, "0");
}

const avatarStyle = hexColor => ({
  backgroundColor: hexColor,
  width: 25,
  height: 25,
  fontSize: 10,
  fontWeight: "bold"
});
export function generateDomColorizer(min, max, inverted = false) {
  const colorizer = generateColorizer(min, max, inverted);

  return function(value) {
    const { red, green, blue } = colorizer(value);
    const hexColor = `#${hexalize(red)}${hexalize(green)}${hexalize(blue)}`;
    return <Avatar style={avatarStyle(hexColor)}>{value}</Avatar>;
  };
}
