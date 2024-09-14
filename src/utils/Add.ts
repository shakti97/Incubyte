function add(input: string): number {
  // delimiter is a regular expression that matches a comma
  const delimiter = /,/;
  // split the input string by the delimiter and convert each element to a number
  const numArray = input.split(delimiter).map(Number);
  console.log('numArray', numArray);
  if (input === "") {
    return 0;
  }
  // return the sum of the numbers in the array using the reduce method
  return numArray.reduce((sum, num) => sum + num, 0);
}

export { add };
