import { add } from "./Add";

describe("Add function", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
