{/* Task 1: Reverse String (JavaScript)

Write a JavaScript function that takes a string as input and returns the string reversed.

Example:  
Input: `"hello"`  
Output: `"olleh"` */}


// The function will take in a string as a parameter
function stringReversal(str) {
    //split puts all characters into an array
    //reverse changes the order of the elements
    //join combines the elements back into into a string
    return str.split('').reverse().join('');

}

console.log(stringReversal("hello")); //olleh 



{/* Task 2: FizzBuzz (JavaScript)

Write a JavaScript function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

Example Output:  
```
1  
2  
Fizz  
4  
Buzz  
Fizz  
7  
8  
Fizz  
Buzz  
…
``` */}

//For Loop to get through the numbers 1 - 100

for (var i = 1; i <= 100; i++) {

    //Empty string to test later
    var output = "";

    // Fizz for multiples of 3
    if( i % 3 == 0) { output += "Fizz"; }

    // Buzz for multiples of 5
    if( i % 5 == 0) { output += "Buzz"; }

    // Lets test another scenario to make sure it works still with something being added 
    //if( i % 7 == 0) { output += "Testing..."; }


    // If multiples of both 3 & 5 then we can have them say FizzBuzz

    if(output == "") { output = i; }

    console.log(output); //fizz, buzz, fizzbuzz, and testing if you remove comments

    }

    {/* Task 3: Even or Odd (JavaScript)

    Write a JavaScript function that accepts an integer and returns whether it is even or odd*.

    Example:  
    Input: `3`  
    Output: `"Odd"`

    Input: `8`  
    Output: `"Even"` */}

    function numberEvenOrOdd(int) {
        //modulus operator checks for a remainder
        if (int % 2 == 0 ) {
            return "Even";
        //If a number isn't even then by default it's odd
        } else {
            return "Odd";
        }
    }

   console.log(numberEvenOrOdd(3)) // Odd
   console.log(numberEvenOrOdd(8)) //Even





