function foo(a, b) {
  if (a === null && b === null) {
    throw new Error("Both parameters cannot be null"); //Handle the case where both are null
  } else if (a === null || b === null) {
    return 0; // Handle the case where one parameter is null
  }
  return a + b;
}

// Test cases
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0

try {
  console.log(foo(null, null)); // Throws an error
} catch (e) {
  console.error(e); // Output: Error: Both parameters cannot be null
}
