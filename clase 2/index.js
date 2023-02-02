/* 
estructura del el condicional if 

if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
} 
*/

// if (true){
//     console.log("entramos");
// }
// console.log("finalizamos");

// if (5 > 3){
//     console.log("5 es mayor que 3");
// }

/* 
= asignacion (let nombre ="camilo";)
== comparacion pero solo evalua el valor ("3" == 3 =>> true)
=== comparaion evaluando tanto valor como tipo de dato ("3" === 3 =>> false)

 */

// let numero = 5;

// if(numero === 5){
//     console.log("el numero es 5");
// }

// let agua = prompt("hay agua");

// if(agua === "si"){
//     alert("no salgo");
// }

// let color = prompt("ingrese un color");

// if(color === "rojo"){
//     alert("escribiste rojo");
// }

// if(color ==="azul"){
//     alert("escribiste azul");
// }

/* 
estructura if else

if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else{
    codigo a ejecutar cuando la condicion no es verdadera
}
 */

// let respuesta = prompt("realizaste la tarea");

// if(respuesta === "si"){
//     alert("puedes salir a jugar");
// }else{
//     alert("no puede salir a jugar");
// }

// let nombre = prompt("ingrese su nombre");

// if(nombre === ""){
//     alert("no ingresaste el usuario");
// }else{
//     alert("bienvenido "+ nombre)
// }

// let respuesta = prompt("esta lloviendo?");
//  if(respuesta === "si"){
//     alert("no salgo");
//  }else{
//     alert("si slago")
//  }

// let edad = parseInt(prompt("ingrese su edad"));

// if(edad < 18){ 
//     alert("no puedes entrar a la fiesta")
// }else{
//     alert("puedes entrar a la fiesta")
// }

/* 
estructura del if else if ... else

if(condicional){
    codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion){
    codigo a ejecutar cuando la condicion2 es verdadera
}else if(condicion){
    codigo a ejecutar cuando la condicion3 es verdadera
}else{
    codigo a ejecutar cuando ninguna de las condiciones es veradera
}
 */

// let edad = parseInt(prompt("ingrese su edad"));

// if(edad <14){
//     alert("no puede entrar a la fiesta");
// }else if(edad < 18){
//     alert("puedes entrar a la fiesta con un adulto");
// }else if(edad < 50){
//     alert("puedes entrar a fiesta");
// }else{
//     alert("eres muy mayor no puedes entrar a la fiesta");
// }

// let numero = 5;
// let verdad = true;
// let falsedad = numero > 10;

// console.log(verdad);
// console.log(falsedad);

// let edad = parseInt(prompt("ingrese su edad"));

// if(edad == NaN){
//     alert("no ingreso un numero en el campo");
// }else{
//     if(edad < 18){
//         alert("No puedes entrar a la fiesta");
//     }else{
//         alert("puedes entrar a la fiesta");
//     }
// }

// let nombre = "danilo"

// if (isNaN(nombre)){
//     console.log("Bienvenido " + nombre);
// }else{
//     console.log("ingrese un nombre valido");
// }

/* 
condicion1 && condicion 2 => es verdadera siempre y cuando las dos condiciones sean verdaderas
en caso contrario es falso

condicion || condicion2 => es verdadera siempre y cuando almenos una de las dos sea 
verdadera en caso contrario es falsa
 */

// console.log(true && true);
// console.log(true && falso);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// if("andres"){
//     console.log("entramos al if");
// }else{
//     console.log("no entramos al if");
// }

// let nombre = prompt("ingrese el nombre");

/* if(nombre === "pepito" || nombre === "PEPITO"){
    alert("Hola pepito");
}else{
    alert("no eres pepito");
} */

// if(nombre.toUpperCase() === "PEPITO"){
//     alert("Hola pepito");
// }else{
//     alert("no eres pepito");
// }

//toUpperCase()   convierte un string en mayuscula
//toLowerCase()   convierte un string en minuscula

alert("Aqui Podras averiguar cuanto cuestan tus entradas a la super atraccion mecanica")

let nombre = prompt("ingrese su nombre");
let edad =  parseInt(prompt("ingrese su edad"));


if (isNaN(nombre)) {
    alert("bienvenido " + nombre);
    if(edad < 5 && edad >= 0){
        alert("Usted esta en la categoria A, Podras entrar totalmente gratis");
    }else if(edad < 0){
        alert("escriba bien su edad por favor");
    }else if(edad <12){
        alert("Usted esta en la categoria B, La entrada tendra un costo de 12 USD");
    }else if(edad < 18){
        alert("Usted esta en la categoria C, la entrada tendra un costo  de 18 USD");
    }else if(edad > 60 & edad <= 80){
        alert("Usted esta en la categoria adulto mayor, la entrada tendra un costo de 10 USD");
    }else if(edad > 80 && edad <= 100){
        alert("No se le recomienda subirse a la atracción mecanica");
    }else if(edad > 100){
        alert("no deberia estar por aqui");
    }else{
        alert("Usted esta en la categoria D, La entrada tiene un valor de 20 USD");
    }
}else{
    alert("Ingrese un nombre valido");
}
