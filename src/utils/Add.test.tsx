import { add } from "./Add";

describe("Add function", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself when a single number is passed", () => {
    expect(add("5")).toBe(5);
  });

  it("should return the sum of n numbers separated by a comma", () => {
    expect(add("1,2,4")).toBe(7);
  });

  it("should return the sum of n numbers separated by a comma & new line character", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//:\n1:2:3")).toBe(6);
  });

  it("should throw an error when negative numbers are present", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
    expect(() => add("-1,-2,-3")).toThrow(
      "negative numbers not allowed -1, -2, -3"
    );
  });
});
