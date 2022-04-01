//////////////////
// EJERCICIO-2 //
/////////////////

// let date = new Date();
// let hour = date.getHours();
// let minutes = date.getMinutes();

// para comprobar si funciona el progrma se comentaria
// las 2 lineas de abajo, y comprobaríamos con las otras
// 2 lineas siguientes.
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let hour = 5;
// let minutes 59;

// if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
//     alert("¡Buenos días!");
// } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
//     alert("¡Buenos tardes!");
// } else { ((hour >= 21 && minutes >= 0 || hour <= 05 && minutes <= 59)
//     alert("¡Buenos noches!");
// } else {
//     console.log("system time is failing.");
// }

//////////////////
// EJERCICIO-3 //
/////////////////

const exercise3 = () => {

  let letters = "01234567789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
for (let i = 1; i <=10; i++) {
    console.log("%cHello World¡", 'color: ${generateColor()}`);
}
};
exercise3();
