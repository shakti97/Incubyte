function add(input: string): number {
  if (input === "") {
    return 0;
  }

  // default delimiter is a regular expression that matches a comma or a new line character
  let delimiter = /,|\n/;

  if(input.startsWith('//')) {
    // extract the delimiter from the input string
    const delimiterSection = input.match(/^\/\/(.*)\n/);
    if(delimiterSection !== null) {
      delimiter = new RegExp(delimiterSection[1]);
      input=input.slice(delimiterSection[0].length);
    }
  }

  // split the input string by the delimiter and convert each element to a number
  const numArray = input.split(delimiter).map(Number);
  console.log('numArray', numArray);
  // return the sum of the numbers in the array using the reduce method
  return numArray.reduce((sum, num) => sum + num, 0);
}

export { add };
