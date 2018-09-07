import { abbreviate } from "./abbreviator";

describe("abbreviator", () => {
  it("abbreviate one word", () => {
    const word = "Ballast";
    expect(abbreviate(word)).toBe("B");
  });

  it("abbreviate multiple words", () => {
    const word = "Rear Anti Roll Bar";
    expect(abbreviate(word)).toBe("RARB");
  });
});
