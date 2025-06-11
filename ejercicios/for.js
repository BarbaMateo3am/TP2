//5a
var words;
words = ["hola", "mundo", "javascript", "array", "bucle"];
for (var i = 0; i < words.length; i++) {
  alert("Ejercicio 5a: " + words[i]);
}

//5b
for (var i = 0; i < words.length; i++) {
  var modified = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
  alert("Ejercicio 5b: " + modified);
}

//5c
var sentence;
sentence = "";
for (var i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}
alert("Ejercicio 5c: " + sentence.trim());

//5d
var numbers;
numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(i);
}
console.log("Ejercicio 5d: " + numbers);