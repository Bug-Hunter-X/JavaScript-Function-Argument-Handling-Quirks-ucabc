function foo(a,b){if(typeof a !== 'number' || typeof b !== 'number'){return "Invalid input: Arguments must be numbers";}return a+b;}console.log(foo(2,3)); //outputs 5
console.log(foo(2)); // outputs Invalid input: Arguments must be numbers
console.log(foo(2,"3")); //outputs Invalid input: Arguments must be numbers