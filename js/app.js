// let n = 1;
// if (n == 1) {
//   console.log("winner!");
// } else if (n == 2) {
//   console.log("Silver medal");
// } else if (n == 3) {
//   console.log("Bronze medal");
// } else {
//   console.log("Try again please");
// }

// console.log("Algo mas de codigo");

// //
// let character = "Black Widow";

// switch (character) {
//   case "Captain America":
//     power = "Indestructible shield";
//     break;
//   case "Black Widow":
//     power = "Master spy & assassin";
//     break;
//   case "Iron Man":
//     power = "Genius-level intellect";
//     break;
//   case "Thor":
//     power = "The hammer of Thor";
//     break;
//   default:
//     console.log("Choose your hero!");
//     break;
// }
// console.log(power);

// // check a number
// let number = 10;

// switch (true) {
//   case number < 0:
//     console.log("Under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("Between 0 and 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("between 10 and 20");
//     break;
//   case number > 20:
//     console.log("Over 20");
//     break;
//   default:
//     console.log("Our of range");
// }

let numbers = [1, 4, 6, 8];
let sum = 0;
for ( let num of numbers) {
  sum += num;
}
console.log(sum);