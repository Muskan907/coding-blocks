// Scope determines where variables, functions, and objects are accessible in your code and it is of two type : global and functional
// global variable is a variable that is defined outside of any function
// it can be accessed from any part of the program and  it is also known as static variable

// Function Scope :A variable declared inside a function using var, let, or const is only accessible within that function.

//  Lexical Scope (Static Scope) :Inner functions can access variables from outer functions ; lexical environment=local memory +lexical environment
var a=100;

function b(){
    console.log(a);
}
console.log(a);

b();