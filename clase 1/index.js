
// comentario de una sola linea 

/* 
comentario 
de 
varias 
lineas
*/

/* let edad; // declaracion de una variable recomendada
edad = 16;  */// asignacion de una variable

/* var nombre = "andres" // declaracion de una variable no recomendada
var apellido = 'ruiz' */
 
/* const CURSO = "JavaScript";

console.log("Este es el valor de la variable", edad); */

/* nombreBonitoGrande => camelCase => //usamos este en javascript
nombre_bonito_grande => snakeCase
NombreBonitoGrande => PascalCase */
/* 
let numeroUno = 4;
let numeroDos = 6;

let resultadoSuma = numeroUno + numeroDos;
let resultadoResta= numeroUno - numeroDos;

console.log("el resultado de la suma es: ",resultadoSuma);
console.log("el resultado de la resta es: ",resultadoResta); */

// let saludo = "hola";
// let nombre = "Camila";

// let saludoCompleto = saludo + " " + nombre;
// console.log(saludoCompleto);

// let nombre = prompt("ingrese su nombre");
// console.log("el nombre de la persona es",nombre);
/* 
let nombre = prompt("ingrese su nombre");
alert("el nombre de la persona es " + nombre); */

/* let edad = 56;
let nombre = "mariano";

console.log(typeof(edad));
console.log(typeof(nombre)); */

/* let variable = parseInt(prompt("ingrese su nombre"));
alert(typeof(variable)); */

let nombre = prompt("escribe tu nombre");
let apellido = prompt("escribe tu apellido")
alert("Hola " + nombre + " " + apellido + " bienvenido");

let numero1 = parseInt(prompt("escoje el numero 1 " + nombre + " " + apellido));
let numero2 = parseInt(prompt("escoje el numero 2 " + nombre + " " + apellido));

let resultadoSuma = numero1 + numero2;
alert("este es el resultado de la suma " + resultadoSuma);


let resultadoResta = numero1 - numero2;
alert("este es el resultado de la resta " + resultadoResta);

let resultadoMultiplicacion = numero1 * numero2;
alert("este es el resultado de la multplicacion " + resultadoMultiplicacion);

let resultadoDivision = numero1 / numero2;
alert("este es el resultado de la division " + resultadoDivision);

alert("esto fue todo por el momento, hasta luego " + nombre + " " + apellido)


