//6a
function suma(x, y) {
  return x + y;
}
var resultado6a;
resultado6a = suma(5, 7);
console.log("Ejercicio 6a: " + resultado6a);

//6b
function sumaValida(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    alert("Ejercicio 6b: Uno de los parámetros no es un número");
    return NaN;
  }
  return x + y;
}
console.log("Ejercicio 6b: " + sumaValida(5, "hola"));

//6c
function validateInteger(n) {
  return Number.isInteger(n);
}
console.log("Ejercicio 6c: " + validateInteger(10.5));

//6d
function sumaConEnteros(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    alert("Ejercicio 6d: Uno de los parámetros no es un número");
    return NaN;
  }
  if (!Number.isInteger(x)) {
    alert("Ejercicio 6d: Primer parámetro no es entero");
    x = Math.round(x);
  }
  if (!Number.isInteger(y)) {
    alert("Ejercicio 6d: Segundo parámetro no es entero");
    y = Math.round(y);
  }
  return x + y;
}
console.log("Ejercicio 6d: " + sumaConEnteros(5.3, 6.8));

//6e
function validarEntero(n) {
  if (!Number.isInteger(n)) {
    alert("Ejercicio 6e: No es entero, se redondeará");
    return Math.round(n);
  }
  return n;
}
function sumaFinal(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    alert("Ejercicio 6e: Uno de los parámetros no es un número");
    return NaN;
  }
  x = validarEntero(x);
  y = validarEntero(y);
  return x + y;
}
console.log("Ejercicio 6e: " + sumaFinal(5.9, 3.2));