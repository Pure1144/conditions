// // Exercise 1
// // <h3>Write a  which checks given input/parameter:</h3>
// // <ul>
// //   <li>If input/parameter is divisible by 3 print => Fizz</li>
// //   <li>If input/parameter is divisible by 5 print => Buzz</li>
// //   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
// //   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
// //   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// // </ul>


// //  const giveNumber = prompt("Гараас утга оруулна уу")

// // if (giveNumber % 3 === 0) {
// //     console.log("Fizz");                      // <li>If input/parameter is divisible by 3 print => Fizz</li>
// // } else if (giveNumber % 5 === 0) {
// //     console.log("Buzz");                      // <li>If input/parameter is divisible by 5 print => Buzz</li>
// // } else if (giveNumber % 3 === 0 && giveNumber % 5 === 0) {
// //     console.log("Fizz and Buzz");                     //<li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
// // }
// // else if (giveNumber % 3 != 0 || giveNumber % 5 != 0) {
// //     console.log("Not Fizz and Buzz");                   //<li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
// // } else if (typeof giveNumber !== "number") {
// //     console.log("Nan - Not a Number! Please Input Number")
// // }

// // Exercise 2
 
// // Write a JavaScript conditional statement to find the largest of five numbers.
// // check input numbers are the type of number, if not console.log('Invalid inputs
 
// // Sample numbers : -5, -2, -6, 0, -1
// // Output : 0

// let Too1 = -5;
// let Too2 = -2;
// let Too3 = -6;
// let Too4 = 0;
// let Too5 = -1;

// if ( Too1 > Too2 &&  Too1  > Too3 && Too1  > Too4 && Too1  > Too5 ) {
//     console.log("Too1"); 
// }  
// else if ( Too2 > Too1 &&  Too2  > Too3 && Too2  > Too4 && Too2  > Too5 ) {
//     console.log("Too2"); 
// }  
// if ( Too3 > Too1 &&  Too3  > Too2 && Too3  > Too4 && Too3  > Too5 ) {
//     console.log("Too3"); 
// }  
// else if ( Too4 > Too1 &&  Too4  > Too2 && Too4  > Too3 && Too4  > Too5 ) {
//     console.log("Too4"); 
// }  
// else if ( Too5 > Too1 &&  Too5  > Too5 && Too3  > Too3 && Too5  > Too4) {
//     console.log("Too5"); 
// }  

// // Exercise 3
 
// // Write a JavaScript program that accept two integers and display the larger.
 
// // check input numbers are the type of number, if not console.log('Invalid inputs)
 
// // Sample numbers : 2,5
// // Output : 5

// let Too6 = 25;
// let Too7 =30;

// if ( Too6 > Too7 ) {
//     console.log("Too6"); 
// }  
// else {                                 //nuhtsulgui hevleh
//     console.log("Too7");
// }

// // Exercise 4
 
// // Write a JavaScript conditional statement to find the sign of product of three numbers.
// // Display an console.log box with the specified sign.
 
// // Sample numbers : 3, -7, 2
// // Output : The sign is -

// let Too8 = 3;
// let Too9 = 8;
// let Too10 =2;



// if ( Too8 + Too9 + Too10< 0 ) {

//     console.log("-");
// }
// else {
//     console.log("+");
// }
   

// // Exercise 5
 
// // Choose the correct comparison operator to console.log true, when x is greater than y.
// // Choose the correct comparison operator to console.log false, when x is equal to y.
// // Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.
 
//  const x = 4;
//  const y = 4;



// if ( x > y ) {

//     console.log("true");
// }

// else if ( x === y ) {
//     console.log("false");
// }



// else if  ( x !== y ) {
//     console.log("Not equal");
// }


// // Exercise 6
 
// // The Grade Assigner
// // - Write a if/else statement that:
// //   - takes 1 variable, a number score.
// //   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// // - Call that if/else statement for a few different scores and log the result to make sure it works.
   
//  const Grade1  = 75;




// if ( 100 >= Grade1 && Grade1  >= 90 ) {

//     console.log("A");
// }

// if ( 89 >= Grade1 && Grade1  >= 80 ) {

//     console.log("B");
// }

// if ( 79 >= Grade1 && Grade1  >= 70 ) {

//     console.log("C");
// }
// if ( 69 >= Grade1 && Grade1  >= 60 ) {

//     console.log("D");
// }
// if ( 59 >= Grade1 && Grade1  >= 0 ) {

//     console.log("F");
// }

// // Exercise 10 j
// // Write If statement that takes string
// //     if string length is more than 10 print the string  has more than 10 characters
// //      if string length is more than 5 return the string has more than 5 characters
// //       if string length is less than 1 return the string has nothing
// //       if string length is equal to 1 return the string has 1 character

// const pub="p";


// if ( pub.length>=10) {   // pub- iig 10 tai jishij bna

//     console.log("string has more than 10 characters");
// }
// else if ( pub.length>=5 ) {
//     console.log("string has more than 5 characters");
// }

// else if ( pub.length<1 ) {
//     console.log("string has nothing");
// }
// else if ( pub.length === 1 ) {
//     console.log("string has 1 character");
// }

// // Exercise 7 j
 
// //  3) Write conditional expressions to satisfy the following safety rules:
 
// //  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
// //  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
// //  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// // Write If statement that takes number checks if the number is odd or even
 
// //     if odd return "the number is odd"
// //     if even return "the number is even"

// const crewStatus  = 1;                           // a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
// const computerStatusCode   = 401;   
// const shuttleSpeed    = 20003; 


// if ( crewStatus === 1) {  

//     console.log("Crew Ready");
// }
// else if ( crewStatus !== 1 ) {
//     console.log("Crew Not Ready");
// }




// if ( computerStatusCode  === 200 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//     console.log("Please stand by. Computer is rebooting.");
// }
// else if ( computerStatusCode  === 400  ) {
//     console.log("Success! Computer online.");
// }

// else   {
//     console.log("ALERT: Computer offline!");
// }




// if ( shuttleSpeed  <=8000 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//     console.log("ALERT: Cannot maintain orbit!");
// }
// else if ( shuttleSpeed  >=17500  ) {
//     console.log("ALERT: Escape velocity reached!");
// }

// else   {
//     console.log("Stable speed");
// }

// if ( shuttleSpeed % 2 > 0 ) {                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//     console.log("the number is odd");
// }

// else   {
//     console.log("the number is even");

// }


// // Exercise 8 j
 
// // Write if statement that takes role and return each role with greeting
 
// //     if role is 'Employee' return 'Hello'
// //     if role is 'Director' return 'Greetings'
// //     if role is '' return 'Please provide role'
// //     else return 'Hi'
 

// const roll="";

// if ( roll === "Employee" || roll === "employee" ){   // pub- iig 10 tai jishij bna

//     console.log("Hello");
// }

//  else if ( roll === "Director" || roll === "director" ){                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//     console.log("Greetings");
// }

// else if ( roll !== "Employee" || roll !== "employee" ||roll !== "Director" || roll !== "director" ){                              // b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//     console.log("Please provide role");
// }
// else   {
//     console.log("Hi");
// }

// // Exercise 8 j
 
// // 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// // бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// // Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.


// const ХоолныҮнэ= 1000;

// if ( ХоолныҮнэ <= 30000 && ХоолныҮнэ >= 5000 ){   // 

//     console.log(ХоолныҮнэ+ХоолныҮнэ/100*15);
// }

// else   {
//     console.log(ХоолныҮнэ+ХоолныҮнэ/100*20);
// }



//                        //IF and other exercises

// // 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
// //      let i = 4 > 3;          //true-ok
// //      let iii = 4 < 3;        //false-ok
// //      let ii = 4 >= 3;        //true-ok
// //      let iv = 4 <= 3;        //false-ok
// //      let v = 4 == 4;          //false-no
// //      let vi = 4 === 4;         //true ok
// //      let vii = 4 != 4;          //false ok
// //      let iix = 4 !== 4;       //false ok
// //      let ix = 4 != "4";        //true-no
// //      let x = 4 == "4";         //false-no
// //      let xi = 4 === "4";        //false-ok

// console.log("bodlog i", 4 > 3);
// console.log("bodlog ii", 4 < 3);
// console.log("bodlog iii", 4 >= 3);
// console.log("bodlog iv", 4 <= 3);
// console.log("bodlog v", 4 == 4);
// console.log("bodlog vi", 4 === 4);
// console.log("bodlog vii", 4 != 4);
// console.log("bodlog viii", 4 !== 4);
// console.log("bodlog ix", 4 != "4");
// console.log("bodlog x",  4 == "4");
// console.log("bodlog x",  4 === "4");

// 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let one = 4 > 3 && 10 < 12;        true
//      let two = 4 > 3 && 10 > 12;        false
//      let three = 4 > 3 || 10 < 12;
//      let four = 4 > 3 || 10 > 12;
//      let five = !(4 > 3);
//      let six = !(4 < 3);
//      let eight = !(4 > 3 && 10 < 12);
//      let nine = !(4 > 3 && 10 > 12);
//      let ten = !(4 === "4");


// 1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.

const Жил= 1200;

if ( (Жил%4 == 0 && Жил%100 !== 0) || Жил%400 == 0 ){   

    console.log("ӨндөрЖил");

}
else{

    console.log("ӨндөрЖил-Биш");
    
}

// 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
 const ХоолныҮнэ= 100000;

if ( ХоолныҮнэ <= 30000 && ХоолныҮнэ >= 5000 ){   // 

    console.log(ХоолныҮнэ+ХоолныҮнэ/100*15);
}

else   {
    console.log(ХоолныҮнэ+ХоолныҮнэ/100*20);
}

// 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
//      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
//      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
//      3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
//          НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

   
 
const Bat  = 67;
const Onts_dumd = 3;


if ( 100 >= Bat && Bat  >= 90  ) {

    console.log( "Bat -",Bat,"- A-Маш сайн");   //  "Bat -" нэр орууллаа, ",Bat,"- оноо ,"- A-Маш сайн" -ерөнхий дүн.
}

else if ( 89 >= Bat && Bat  >= 80 ) {

    console.log("Bat -",Bat,"- B-Сайн");
}

 else if ( 79 >= Bat && Bat  >= 70 ) {

    console.log("Bat -",Bat,"- C-Дунд");
}
else if ( 69 >= Bat && Bat  >= 60 ) {

    console.log("Bat -",Bat,"- D-Хангалттай");
}
 else if ( 50 >= Bat && Bat  >= 0 ) {

    console.log("Bat -",Bat,"- F-Маш муу");
}


 if ( 100 >= Onts_dumd && Onts_dumd  >= 90  ) {

    console.log( "Onts_dumd -",Onts_dumd,"- A-Маш сайн");
}

else if ( 89 >= Onts_dumd && Onts_dumd  >= 80 ) {

    console.log("Onts_dumd -",Onts_dumd,"- B-Сайн");
}

 else if ( 79 >= Onts_dumd && Onts_dumd  >= 70 ) {

    console.log("Onts_dumd -",Onts_dumd,"- C-Дунд");
}
else if ( 69 >= Onts_dumd && Onts_dumd  >= 60 ) {

    console.log("Onts_dumd -",Onts_dumd,"- D-Хангалттай");
}
else if ( 59 >= Onts_dumd && Onts_dumd  >= 0 ) {

    console.log("Onts_dumd -",Onts_dumd,"- F-Маш муу");
}

// 4. Өгөгдсөн 2 тооны ихийг олох функц бич.

let ih= Math.max(67, 3, 5)
console.log(ih);



const Too0  = 99;
const Too1 = 55;


if ( Too0 - Too1 >= 0  ) {

console.log("Too0","- Ихтоо");   //  "Bat -" нэр орууллаа, ",Bat,"- оноо ,"- A-Маш сайн" -ерөнхий дүн.
}

else console.log("Too1","- Их тоо");
