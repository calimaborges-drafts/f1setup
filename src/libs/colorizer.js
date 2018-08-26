export function percentageInRange(min, max, value) {
  let sanitizedValue = value;

  if (value < min) {
    sanitizedValue = min;
  }

  if (value > max) {
    sanitizeValue = max;
  }

  return (sanitizedValue - min) / (max - min);
}

export function percentageToColor(percentage) {
  const maxValue = 255;
  const green = Math.floor(percentage * maxValue);
  const red = Math.floor((1 - percentage) * maxValue);
  return { red, green, blue: 0 };
}

export function generateColorizer(min, max) {
  if (min > max || max < min) {
    throw new Error(
      `Max (${max}) value should be bigger than min (${min}) value`
    );
  }

  return function(value) {
    return percentageToColor(percentageInRange(min, max, value));
  };
}
