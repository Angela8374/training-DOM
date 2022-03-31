// Loops
// counting by one to one
//let count = 0;
//while (count < 10) {
//    console.log(count);
// count ++;
// count = count + 1;
//    count += 1;
//}
//console.log("El programa seguiría por aquí");
//let monthDays = new Date (2022,3,0).getDate();
//let firsDay = new Date (2022,3,1).getDate();
//console.log(monthDays);
//March calendar
//let day = 1;
//while (day <= monthDays){
//    console.log(day);
//    day++;
//}

// counting 2 by 2
//let number = 0;
//while (number <= 100) {
//    console.log("esto nos se verá en pantalla");
// number = number + 2;
//    number += 2;
//}

// For loop
//let end = 10;
//for (let start =1;start <= end;start++){
//    console.log(start);
//}

//let end = 10;
//for (let count = 0;count < end;start++); {
//    console.log(start);
//}
//console.log("mostrar algo");
//let start = 1;
//for (let start = 0;start < 10; start +=5) {
//    console.log(start);
//}
//let start, end;
//for (start = 0, end = 1000; start < end; start+++, end--); {
//    console.log(start," ",end);
//}
//console.log("Showing values after finishing the loop");
//console.log(start," ",end);

//for (let num = 0; num < 10; num++){
//    console.log(num);
//}

// let userValue = prompt("Enter your value: ");
// for (let num = 1; num <=10; num++) {
//     console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

// Exercise 3
// let temperature = prompt("what temperature is it out there?");
// console.log(typeof temperature);
// switch (true) {
//   case temperature < 15:
//     alert("Warm up");
//     break;
//   case temperature <= 25:
//     alert("Enjoy the weather!");
//     break;
//   case temperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("Write a real data!");
//     break;
// }

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Write a real data!");
// }

// EXERCISE: 4
//let isGreen = true;
// trying the negate operator
// if (!isGreen) {
//   console.log("Please await");
// } else {
//   console.log("Cross the road");
// }
// // more understandable and intuitive
// if (isGreen) {
//   console.log("Cross the road");
// } else {
//   console.log("Please await");
// }

// Giovanna solution
// let actualDate = new Date();
// let currentTime = actualDate.getMinutes();
// console.log(currentTime);
// // Checks if the minutes of the current time are odd or even.
// // If even, the lights are green, and if odd, the lights are red
// let isGreen = currentTime % 2 == 0;
// switch (isGreen) {
//   case true:
//     console.log("Cross the road");
//     break;
//   case false:
//     console.log("Please await");
//     break;
//   default:
//     console.log("Watch out! The traffic lights are broken!");
//     break;
// }

// Exercise 5
// let temperature = "Freezing Point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point ":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }

// Erika solution
// const CELSIUS = prompt("Write temperature in grades centigrades");
// // let celsius = parseFloat(prompt("Convert to fahrenheit"));
// const FAHRENHEIT = (CELSIUS * 9) / 5 + 32;
// console.log(
//   `${CELSIUS} degree celsius is equal to ${FAHRENHEIT} degree fahrenheit.`
// );

// let num = 0;
// for (let i = 1; i < 10; i++) {
//   if (i % 5 == 0) {
//     break;
//   }
//   num++;
// }
// console.log(num);


// Object literal syntax
// let star = {
//   name: "Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/cep",
//   spectralClass: "F7",
//   mag:2.0,
// };

// Escribe un objeto person, que contenga, nombre, apellidos,
// edad, dirección (tipoVia, nombreVLia, num, cp, localidad})
// let person = {
//   name: "Angela",
//   lastName: "Mancebo",
//   age:47,
//   adress : {
//     streetType: "Boulevard",
//     streetName: "Larios",
//     num: 53,
//     cp: 54321,
//     location:"Málaga",
//   },
//   phone: "+34 678 532 210",
// }

// person.address.location = "Madrid";
// console.log(person);

// person.phome = {
//   1: "+34 678 345 432",
//   2: "+34 698 434 992",
//   3: "+34 678 122 322",
// };
// console.log(person);

// crear un objeto llamado login con las
// propiedades y valores respectivamente,
// id => un numero hexadecinal
// state => logged => verdadero o falso, 
// online => verdadero o falso)
// userName => "nombre"
// loginAt: => fecha y hora

let login = {
  id: "0afbc357de89f",
  state: {
    logged:true,
    online:true,
    },
    userName: "jane",
    loginAt: "2022/3/28 18:15:30",
};
