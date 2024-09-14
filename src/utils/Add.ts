function add(input: string): number {
  if (input === "") {
    return 0;
  }
  if (input.length === 1 && !isNaN(Number(input))) {
    return Number(input);
  }
}

export { add };
