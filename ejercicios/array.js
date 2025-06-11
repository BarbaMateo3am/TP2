//3a
var months;
months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Ejercicio 3a: " + months[4] + ", " + months[10]);

//3b
console.log("Ejercicio 3b: " + months.sort());

//3c
months.unshift("Inicio");
months.push("Fin");
console.log("Ejercicio 3c: " + months);

//3d
months.shift();
months.pop();
console.log("Ejercicio 3d: " + months);

//3e
console.log("Ejercicio 3e: " + months.reverse());

//3f
console.log("Ejercicio 3f: " + months.join("-"));

//3g
var sliceMonths;
sliceMonths = months.slice(months.indexOf("Mayo"), months.indexOf("Noviembre") + 1);
console.log("Ejercicio 3g: " + sliceMonths);