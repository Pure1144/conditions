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

// const Жил = 1200;

// if ((Жил % 4 == 0 && Жил % 100 !== 0) || Жил % 400 == 0) {
//   console.log("ӨндөрЖил");
// } else {
//   console.log("ӨндөрЖил-Биш");
// }

// 2. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
//  const ХоолныҮнэ= 100000;

// if ( ХоолныҮнэ <= 30000 && ХоолныҮнэ >= 5000 ){   //

//     console.log(ХоолныҮнэ+ХоолныҮнэ/100*15);
// }

// else   {
//     console.log(ХоолныҮнэ+ХоолныҮнэ/100*20);
// }

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

// const Bat  = 67;
// const Onts_dumd = 3;

// if ( 100 >= Bat && Bat  >= 90  ) {

//     console.log( "Bat -",Bat,"- A-Маш сайн");   //  "Bat -" нэр орууллаа, ",Bat,"- оноо ,"- A-Маш сайн" -ерөнхий дүн.
// }

// else if ( 89 >= Bat && Bat  >= 80 ) {

//     console.log("Bat -",Bat,"- B-Сайн");
// }

//  else if ( 79 >= Bat && Bat  >= 70 ) {

//     console.log("Bat -",Bat,"- C-Дунд");
// }
// else if ( 69 >= Bat && Bat  >= 60 ) {

//     console.log("Bat -",Bat,"- D-Хангалттай");
// }
//  else if ( 50 >= Bat && Bat  >= 0 ) {

//     console.log("Bat -",Bat,"- F-Маш муу");
// }

//  if ( 100 >= Onts_dumd && Onts_dumd  >= 90  ) {

//     console.log( "Onts_dumd -",Onts_dumd,"- A-Маш сайн");
// }

// else if ( 89 >= Onts_dumd && Onts_dumd  >= 80 ) {

//     console.log("Onts_dumd -",Onts_dumd,"- B-Сайн");
// }

//  else if ( 79 >= Onts_dumd && Onts_dumd  >= 70 ) {

//     console.log("Onts_dumd -",Onts_dumd,"- C-Дунд");
// }
// else if ( 69 >= Onts_dumd && Onts_dumd  >= 60 ) {

//     console.log("Onts_dumd -",Onts_dumd,"- D-Хангалттай");
// }
// else if ( 59 >= Onts_dumd && Onts_dumd  >= 0 ) {

//     console.log("Onts_dumd -",Onts_dumd,"- F-Маш муу");
//}

// 4. Өгөгдсөн 2 тооны ихийг олох функц бич.

// let ih = Math.max(67, 3, 5);
// console.log(ih);

// const Too0 = 99;
// const Too1 = 55;

// if (Too0 - Too1 >= 0) {
//   console.log("Too0", "- Ихтоо"); //  "Bat -" нэр орууллаа, ",Bat,"- оноо ,"- A-Маш сайн" -ерөнхий дүн.
// } else console.log("Too1", "- Их тоо");

// 5. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

// const Too  = prompt("Тоо оруuл")        //  mobi 94,95 99  uni 88  91,92,96 sky,   93, 97 98 Gmobile 60 66 69  Ondo   99 99 99 99
// let tooniiurdah2oron=Too.substring(0,2);   // enhii 2 orong avna

// if(tooniiurdah2oron == 99 ||tooniiurdah2oron == 94||tooniiurdah2oron == 95)
// {
//     console.log("Mobicom");

// }
// else if(tooniiurdah2oron == 88 ||tooniiurdah2oron == 89||tooniiurdah2oron == 86)
//     {
//         console.log("Unitel");

//     }

// else if(tooniiurdah2oron == 98 ||tooniiurdah2oron == 93||tooniiurdah2oron == 97)
//         {
//             console.log("G-Mobile");

//         }

// else (tooniiurdah2oron == 98 ||tooniiurdah2oron == 93||tooniiurdah2oron == 97)
//             {
//                 console.log("G-Mobile");

//             }

// 6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол

// 7. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
//      a=85 b=75 c=96 d=69
//      80-аас их тоонуудын нийлбэрийг: 181
// 8. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
//      a=3 b=7 c=2 d=4
//      5-аас бага тоонуудын үржвэр: 24
// 9. if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.
// 10. Тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
//      жишээ нь: Input: 120, 33, 10, 12 output: 10
// 11. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу
// 12. n тооны утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
//      negative
//      positive
// 13. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
//      Жингийн дутагдалтай
//      Эрүүл
//      Илүүдэл жинтэй
//      Хэт таргаллалттай
// 14. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу
// 15. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
//      0 <= old <= 1 үед "Infant"
//      1 < old <= 3 үед "Toddler"
//      3 < old <= 5 үед "Preschool"
//      5 < old <=12 үед "Gradeschooler"
//      12 <old <= 18 үед "Teen"
//      18 < old <=21 үед "Youngadult"

//For loop exercises:

// Exercise 1

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.

// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

// for(let i = 1; condition, end point ){
//      action
// }

for (let i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

//Exercise 2

//7. Write a JavaScript program which iterates the integers from 1 to 100.
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
//For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
//0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc

// for (let i = 1;i<=100; i++){

//     if (i%3 == 0){
//         console.log("Fizz")
//     }

//     else if (i%5 == 0){
//         console.log("Buzz")
//     }
//     else if (i%3 == 0 && i%5 == 0 ){
//         console.log("FizzBuzz")
//     }

//     else {
//         console.log(i)
//     }

// }

// Exercise 3

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// Example output:
// 276 + 351 = 627

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// let sumOfFirstArray = 0;
// let sumOfSecondArray = 0;

// for (let i = 0; i < arr_1.length; i++) {
//   sumOfFirstArray = sumOfFirstArray + arr_1[i];
//   sumOfSecondArray = sumOfSecondArray + arr_2[i];
// }
// console.log(sumOfFirstArray);
// console.log(sumOfSecondArray);
// console.log(sumOfFirstArray + sumOfSecondArray);

// Exercise 4

// Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line


// for (let i = 1; i <= 22; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

 
// Exercise 5
 
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
 
// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

// let str1 = "javascript"; 
// let tegshbairlal=''

// for (let i = 0; i < str1.length; i++)            //str1.length-үгийн урт
// if ((i+1) % 2 ===0){
//     tegshbairlal += 'Z'
// } else {
//     tegshbairlal += str1[i]                       //str1.[i]-үсэгний дугаар
// }
//   console.log(tegshbairlal);
  


//Exercise 6
 
//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
//let str2 = "don’t know why";
//Example output:
//“yes”


// let str2 = "don’t know why"; 
// let y = ""


// for (let i = 0; i < str2.length; i++){        
// if  (str2[i] ==="y"){
//     console.log("Yes");
// } else console.log("No");
// }

      


// Exercise 7
 
// Given a number n Calculate the factorial of the number
 
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
 
// let n2 = 6
// let sum =1

// for (let i = 1; i <= n2; i++) {
     
//     sum=sum*i

//    }
//    console.log(sum);
  
//    for (let i = 1; i <= n2; i++) {
     
//     sum=sum*i

//    }
//    console.log(sum);
  


 

//  Exercise 8

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// let urj = 10
// let urjv = 3


// for (let i = 1; i <= 10; i++) {
     
//     urjv=urj*i
//     console.log(urjv);
//    }

  

// Exercise 9

// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.

// let Grade = 66



// for (let i = 1; i <= 100; i++) {

// }
// if  (Grade >="0" && Grade <="59" ) 
// console.log("Grade F");
//  else if  (Grade >="60" && Grade <="69" ) 
//     console.log("Grade D");
//  else if  (Grade >="70" && Grade <="79" ) 
//     console.log("Grade C");
//  else if  (Grade >="80" && Grade <="89" ) 
//     console.log("Grade B");
//  else if  (Grade >="90" && Grade <="100" ) 
//     console.log("Grade A");

        
 

// Exercise 10

//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.

// Example Output:
// 1 2 3 4 5 6 7 8 9 10

// for ( let i=1; i<=10; i++){
    
//         console.log(i)
//     }




// Exercise 11

// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.

// Example Output:
// The sum is 210


// let sum = 0;

// for ( let i=1; i<=20; i++){
//     sum= sum+i
//     console.log(sum)
// }



// Exercise 12

// Count Vowels in a String Write a loop to count how many vowels are in a given string.

// let str = "hello world";
// Example Output:
// Number of vowels: 3

// let str3 = "hello world bagshaa aaa";
// console.log(str3.length);

// const vowels1 = "e";
// const vowels2 = "a";
// const vowels3 = "o";
// const vowels4 = "i";
// const vowels5 = "u";
// const vowels6 = "y";
// let vowelsToo = 0;

// for ( let i=0; i<=str3.length; i++){
//     if (str3[i]==vowels1||str3[i]==vowels2||str3[i]==vowels3||str3[i]==vowels4|| str3[i]==vowels5||str3[i]==vowels6){
//         vowelsToo=vowelsToo+1
//     }
  
  
// }
// console.log("eghsig bna "+vowelsToo)

let str3 = "hello world bagshaa aaa";
console.log(str3.length);

const vowels1 = "e";
const vowels2 = "a";
const vowels3 = "o";
const vowels4 = "i";
const vowels5 = "u";
const vowels6 = "y";
let vowelsToo = 0;

for ( let i=0; i<=str3.length; i++){
    if (str3[i]=="a"||str3[i]=="e"||str3[i]=="o"||str3[i]=="i"||str3[i]=="u"||str3[i]=="y"){
        vowelsToo=vowelsToo+1
    }
  
  
}
console.log("eghsig bna "+vowelsToo)

// Exercise 13

// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.

// Example Output:
// 1 3 5 7 9 11 13 15

for ( let i=1; i++; i<=15){
  
            console.log(i)
}
  


// Exercise 14

// Check if a Number is Prime Write a loop to check if a number n is prime.

// let n = 7;
// Example Output:
// 7 is a prime number

// Exercise 15

// Reverse a String Write a loop to reverse the characters in a string.

// let str = "javascript";
// Example Output:
// tpircsavaj

// Exercise 16

// Calculate Power of a Number Write a loop to calculate base^exponent.

// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32

// Exercise 17

// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.

// Example Output:
// 5 10 15 20 25 30 35 40 45 50

// Exercise 18

// Find the Largest Number in an Array Write a loop to find the largest number in an array.

// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98

// Exercise 19

// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.

// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4

// Exercise 20

// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.

// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8

// Exercise 21

// Find All Divisors Write a loop to find all divisors of a number n.

// let n = 28;
// Example Output:
// 1 2 4 7 14 28

// Exercise 22

// Check Palindrome Write a loop to check if a string is a palindrome.

// let str = "radar";
// Example Output:
// radar is a palindrome

// Exercise 23

// Count Words in a Sentence Write a loop to count the number of words in a sentence.

// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

// Exercise 24

// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.

// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4

// Exercise 25

// Filter Positive Numbers Write a loop to filter out positive numbers from an array.

// let arr = [-3, 5, -2, 0, 9, -8];
// Example Output:
// [5, 9]

// Exercise 26

// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****

// Exercise 27

// Sum of Digits Write a loop to calculate the sum of the digits of a number.

// let num = 12345;
// Example Output:
// Sum of digits: 15

// Exercise 28

// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.

// let arr = [1, 2, 3, 2, 1, 4];
// Example Output:
// [1, 2, 3, 4]

// Exercise 29

// Find Second Largest Number Write a loop to find the second largest number in an array.

// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9

// Exercise 30

// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.

// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]

// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *
