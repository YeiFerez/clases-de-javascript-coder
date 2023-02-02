/* 
estructura de un bucle for

for(desde; hasta; actualizacion){
    codigo a repetir
}
 */
// i++ = i + 1;

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }



// let nombre = "camilo";
// let edad = 50;
// let saludo = "hola"

// let mensaje = saludo + " " + nombre + " " + "tu edad es: " + edad;
// let mensaje = `${saludo} ${nombre} tu edad es: ${edad}`;
// console.log(mensaje);


// let numero = parseInt(prompt("ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//     let resultado = numero * i;
//     let mensaje = `${numero} X ${i} = ${resultado}`;
//     alert(mensaje);
// }

// for(let turno = 1; turno <= 7; turno++){
//     let nombre = prompt("ingrese su nombre");
//     let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//     alert(mensaje);
// }

// for(let i = 1; i <= 10; i++){   
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){   
//     if(i === 5){
//         continue;
//     }
//     console.log(i);
// }

// si quiero sacar los numero pares lo hago asi
 
// for(let i = 1; i <= 20; i++){   
//     if(i % 2 != 0){
//         continue;
//     }
//     console.log(i);
// }


/* 
estructura del while

while(condicion){
    codigo a repetir
}
 */
/* 
let repetir = true;      CUIDADO!! PELIGRO! BUCLE INFINITO

while(repetir){
    console.log("hola");
}
 */

// let usuario = prompt("ingrese el usuario");

// while(usuario != "andres"){
//     alert("usuario incorrecto");
//     usuario = prompt("ingrese el usuario");
// }

// alert("Bienvenido");


// let entrada = prompt("ingrese un dato");

// while(entrada != "ESC"){
//     alert("el usuario ingreso " + entrada)
//     entrada = prompt("ingrese un dato");
// }

// let repetir = false;

// do{ 
//     console.log("entramos");
// }while(repetir);

// while(repetir) {
//     console.log("entramos");
// }

/* 
estructura del switch

switch(valor){
    case valor1:
        codigo a ejecutar cuando el valor coincide con el valor uno
        break;
        
    case valor 2:
        codigo a ejecutar cuando el valor coincide con el valor 2
        break;
    .
    .
    .
    default:
        codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores
        break;
}
 */

// let nombre = prompt(" ingrese un nombre");

// while(nombre != "ESC"){
//     switch(nombre){
//         case "ANA":
//             alert("hola ana");
//             break;

//          case "JUAN":
//             alert("hola juan");
//             break;
        
//         default:
//             alert("Quien eres?");
//             break;
//     }

//     nombre = prompt(" ingrese un nombre");   
// }

// let moneda = "usd";

// switch(moneda){
//     case "ars":
//         console.log("moneda de argentina");
//         break;
    
//     case "cop":
//         console.log("moneda de colombia");
//         break;

//     case "clp":
//         console.log("moneda de chile");
//         break;

//     default:
//         console.log("moneda no reconocida");
//         break;
// }


// ejercicio de clase 

// for(let turno = 1; turno <= 7; turno++){
//     let nombre = prompt("ingrese su nombre");
//     let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//     alert(mensaje);
// }

alert(" a continuacion ingrese 10 paises que usted quisiera conocer")
let nombre
for(let item = 1; item <= 10; item++){
    let lista = prompt("ingrese el pais");
    switch(lista){
        case "corea del norte":
            alert("ojo ese pais no es muy recomendable")
            break;
        
        case "rusia":
            alert("en este momento esta en guerra")
            break;
        
        case "ucrania":
            alert("PELIGRO, esta siendo invadido por Rusia")
            break;
        
        default:

    }
    let mensaje = `pais a conocer: ${lista}. la posicion en que lo coloca: ${item}`;
    alert(mensaje);
}