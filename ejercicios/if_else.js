//4a
var rand;
rand = Math.random();
if (rand >= 0.5) {
  alert("Ejercicio 4a: Greater than 0.5");
} else {
  alert("Ejercicio 4a: Lower than 0.5");
}

//4b
var age;
age = 25;
if (age < 2) {
  alert("Ejercicio 4b: Bebe");
} else if (age < 13) {
  alert("Ejercicio 4b: Niño");
} else if (age < 20) {
  alert("Ejercicio 4b: Adolescente");
} else if (age < 31) {
  alert("Ejercicio 4b: Joven");
} else if (age < 61) {
  alert("Ejercicio 4b: Adulto");
} else if (age < 76) {
  alert("Ejercicio 4b: Adulto mayor");
} else {
  alert("Ejercicio 4b: Anciano");
}