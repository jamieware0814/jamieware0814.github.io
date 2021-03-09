// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
// print numbers 1 through 100 to the console using for loop
//start: 1
//stop (including): 100
for(var i = 1; i <= 100; i++) {
  if( i % 3 === 0 && i % 5 === 0) { //if i is divisible by 3 and 5 print FizzBuzz to the console
    console.log("FizzBuzz");
  } else if(i % 3 === 0) { //if i is divisible by 3 only print "Fizz"
    console.log("Fizz");
  } else if(i % 5 === 0) { //if i is divisible by 5 only print "Buzz"
    console.log("Buzz");
  } else { // if i is divisible by neither 3 nor 5 print the number
    console.log(i);
  }
  }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz;
}