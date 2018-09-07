import { generateColorizer, percentageInRange } from "./colorizer";

describe("percentage in range should calculate right percentage for value within range", () => {
  it("should calculate medium value", () => {
    const min = 0.05;
    const max = 0.15;
    expect(percentageInRange(min, max, 0.1)).toBeCloseTo(0.5);
  });

  it("should calculate minimum value", () => {
    const min = 0.05;
    const max = 0.15;
    expect(percentageInRange(min, max, 0.05)).toBeCloseTo(0);
  });

  it("should calculate maximum value", () => {
    const min = 0.05;
    const max = 0.15;
    expect(percentageInRange(min, max, 0.15)).toBeCloseTo(1);
  });
});

describe("colorizer should generate color based on data range", () => {
  it("should be green the bigger the value", () => {
    const min = 0.05;
    const max = 0.15;
    const colorize = generateColorizer(min, max);
    const { green, red } = colorize(0.15);
    expect(green).toBeCloseTo(200);
    expect(red).toBeCloseTo(0);
  });

  it("should be red the lower the value", () => {
    const min = 0.05;
    const max = 0.15;
    const colorize = generateColorizer(min, max);
    const { red, green } = colorize(0.05);
    expect(red).toBeCloseTo(200);
    expect(green).toBeCloseTo(0);
  });

  it("should have balanced green and red if the value is balanced", () => {
    const min = 0.05;
    const max = 0.15;
    const colorize = generateColorizer(min, max);
    const { red, green } = colorize(0.1);
    expect(green).toBeCloseTo(100);
    expect(red).toBeCloseTo(100);
  });
});
