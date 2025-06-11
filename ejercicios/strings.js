//2a
var str2a;
str2a = "holamundoxd";
console.log("Ejercicio 2a: " + str2a.toUpperCase());

//2b
var str2b, str2b_sub;
str2b = "programacion";
str2b_sub = str2b.substring(0, 5);
console.log("Ejercicio 2b: " + str2b_sub);

//2c
var str2c, str2c_sub;
str2c = "programacion";
str2c_sub = str2c.substring(str2c.length - 3);
console.log("Ejercicio 2c: " + str2c_sub);

//2d
var str2d, str2d_formatted;
str2d = "programacion";
str2d_formatted = str2d.substring(0, 1).toUpperCase() + str2d.substring(1).toLowerCase();
console.log("Ejercicio 2d: " + str2d_formatted);

//2e
var str2e, spaceIndex;
str2e = "hola mundo";
spaceIndex = str2e.indexOf(" ");
console.log("Ejercicio 2e: " + spaceIndex);

//2f
var str2f, space2f, formatted2f;
str2f = "programacion funcional";
space2f = str2f.indexOf(" ");
formatted2f = str2f.substring(0, 1).toUpperCase() + str2f.substring(1, space2f).toLowerCase() + " " + str2f.substring(space2f + 1, space2f + 2).toUpperCase() + str2f.substring(space2f + 2).toLowerCase();
console.log("Ejercicio 2f: " + formatted2f);