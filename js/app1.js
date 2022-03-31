// ================
// let numbers = [1, 4, 6, 8];
// let sum = 0;
// for ( let num of numbers) {
//   sum += num;
// }
// console.log(sum);

// ================
// let hero = {
//   character: "Iron Man",
//   name: "tony Stark",
// };

// for (let key in hero) {
//   console.log(key + ": ", hero[key]);
// }

// ================
// ["Aragorn", "Candalf", "Nazgul"].forEach((item,index,array)) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// };
// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//   console.log(letter);
// });

//=====================
// let number = [1, 2, 3];
// let result = number.map((item,index,array) => item * 2);
// console.log(result);
//----
// let numbers = [15, 10, 5, 0, -5, -10];
// let result = numbers.filter(x => x < 5)
// console.log(result);
//----

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.every((item, index, array) => item > 2));
// console.log(numbers.some((item, index, array) => item > 2));
//----

// Nested arrays (p:58 pdf)
// let calendar = new Array(5);
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7);
// }

// for (let row = 0, day = 1; row < calendar.length; row++) {
//   for (let col = 0; col < calendar[row].length; col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else if (day == 31) {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }
// console.log(calendar);

//===================

// sayHello("my friend", "today will be a great day");

// function sayHello(name, message) {
//   console.log("Hello " + name + ", " + message);
// }

// ===================
// const square = x => (x * x) * x;
// console.log(square(4));






