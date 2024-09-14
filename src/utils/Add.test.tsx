import { add } from "./Add";

describe("Add function", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself when a single number is passed', () => {
    expect(add('5')).toBe(5);
  });
});
