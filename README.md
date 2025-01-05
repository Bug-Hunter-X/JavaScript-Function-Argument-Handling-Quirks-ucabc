# JavaScript Function Argument Handling Quirks

This repository demonstrates some uncommon behaviors of JavaScript functions related to argument handling. Specifically, it highlights how JavaScript handles functions called with fewer arguments or with arguments of unexpected types.

## Bug Description

The `foo` function is defined to accept two arguments and return their sum. However, when called with only one argument, it returns `NaN` instead of throwing an error.  When called with a number and a string, it performs string concatenation instead of numeric addition.  These behaviors stem from JavaScript's dynamic typing and automatic type coercion.

## Bug Solution

The solution involves adding input validation to explicitly handle cases where fewer or invalid types of arguments are passed.  This makes the function's behavior more predictable and robust.