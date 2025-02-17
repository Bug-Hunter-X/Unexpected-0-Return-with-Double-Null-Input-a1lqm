function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause a bug if a and b are both null
  }
  return a + b;
}

console.log(foo(null, null)); //Outputs 0 instead of an error