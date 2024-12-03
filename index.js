// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>


//  const giveNumber = prompt("Гараас утга оруулна уу")

// if (giveNumber % 3 === 0) {
//     console.log("Fizz");                      // <li>If input/parameter is divisible by 3 print => Fizz</li>
// } else if (giveNumber % 5 === 0) {
//     console.log("Buzz");                      // <li>If input/parameter is divisible by 5 print => Buzz</li>
// } else if (giveNumber % 3 === 0 && giveNumber % 5 === 0) {
//     console.log("Fizz and Buzz");                     //<li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
// }
// else if (giveNumber % 3 != 0 || giveNumber % 5 != 0) {
//     console.log("Not Fizz and Buzz");                   //<li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
// } else if (typeof giveNumber !== "number") {
//     console.log("Nan - Not a Number! Please Input Number")
// }

// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let Too1 = -5;
let Too2 = -2;
let Too3 = -6;
let Too4 = 0;
let Too5 = -1;

if ( Too1 > Too2 &&  Too1  > Too3 && Too1  > Too4 && Too1  > Too5 ) {
    console.log("Too1"); 
}  
else if ( Too2 > Too1 &&  Too2  > Too3 && Too2  > Too4 && Too2  > Too5 ) {
    console.log("Too2"); 
}  
if ( Too3 > Too1 &&  Too3  > Too2 && Too3  > Too4 && Too3  > Too5 ) {
    console.log("Too3"); 
}  
else if ( Too4 > Too1 &&  Too4  > Too2 && Too4  > Too3 && Too4  > Too5 ) {
    console.log("Too4"); 
}  
else if ( Too5 > Too1 &&  Too5  > Too5 && Too3  > Too3 && Too5  > Too4) {
    console.log("Too5"); 
}  

// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5

let Too6 = 25;
let Too7 =30;

if ( Too6 > Too7 ) {
    console.log("Too6"); 
}  
else {                                 //nuhtsulgui hevleh
    console.log("Too7");
}

// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -

let Too8 = 3;
let Too9 = 8;
let Too10 =2;



if ( Too8 + Too9 + Too10< 0 ) {

    console.log("-");
}
else {
    console.log("+");
}
   

// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
 
 const x = 4;
 const y = 4;



if ( x > y ) {

    console.log("true");
}

else if ( x === y ) {
    console.log("false");
}



else if  ( x !== y ) {
    console.log("Not equal");
}


// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.
   
 const Grade1  = 75;




if ( 100 >= Grade1 && Grade1  >= 90 ) {

    console.log("A");
}

if ( 89 >= Grade1 && Grade1  >= 80 ) {

    console.log("B");
}

if ( 79 >= Grade1 && Grade1  >= 70 ) {

    console.log("C");
}
if ( 69 >= Grade1 && Grade1  >= 60 ) {

    console.log("D");
}
if ( 59 >= Grade1 && Grade1  >= 0 ) {

    console.log("F");
}

// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character

const pub="p";


if ( pub.length>=10) {   // pub- iig 10 tai jishij bna

    console.log("string has more than 10 characters");
}
else if ( pub.length>=5 ) {
    console.log("string has more than 5 characters");
}

else if ( pub.length<1 ) {
    console.log("string has nothing");
}
else if ( pub.length === 1 ) {
    console.log("string has 1 character");
}

// Exercise 7 j
 
//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"

const crewStatus  = 1;                           // a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
const computerStatusCode   = 401;   
const shuttleSpeed    = 20003; 


if ( crewStatus === 1) {  

    console.log("Crew Ready");
}
else if ( crewStatus !== 1 ) {
    console.log("Crew Not Ready");
}




if ( computerStatusCode  === 200 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

    console.log("Please stand by. Computer is rebooting.");
}
else if ( computerStatusCode  === 400  ) {
    console.log("Success! Computer online.");
}

else   {
    console.log("ALERT: Computer offline!");
}




if ( shuttleSpeed  <=8000 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

    console.log("ALERT: Cannot maintain orbit!");
}
else if ( shuttleSpeed  >=17500  ) {
    console.log("ALERT: Escape velocity reached!");
}

else   {
    console.log("Stable speed");
}

if ( shuttleSpeed % 2 > 0 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

    console.log("the number is odd");
}

else   {
    console.log("the number is even");
}



