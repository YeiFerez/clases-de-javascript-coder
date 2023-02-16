/* 
estructura de un arreglo

[elemento1, elemento 2, ....., elementoN];
*/

// const arregloVacio = [];
// const arregloNumeros = [1, 3, 6, 7];
// const nombres = ["andres", "juan", "camilo"];
// const valores = [true, false];
// const varios = [1, true, "fabian"];

// const nombres = ["andres", "juan", "camilo"];
// console.log(nombres[1]);
// console.log(nombres[0]);
// console.log(nombres[2]);

// const arregloNumeros = [1, 3, 6, 7];
// let resultadoSuma = arregloNumeros[0] + arregloNumeros[1];
// console.log(resultadoSuma);

// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];

// for(let index = 0; index < nombres.length; index++){
//     console.log(nombres[index]);
// }

// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];

// nombres.push("lina"); // agrega elementos al final del arreglo
// nombres.unshift("gregorio"); // incluye elementos al inicio del arreglo

// console.log(nombres);

// nombres.pop(); // saca elementos del final
// nombres.shift(); // saca elementos del inicio
// console.log(nombres);

// nombres.splice(1, 2); // para eliminar uno o varios elementos del arreglo
// console.log(nombres);

// nombres.splice(3, 2);
// console.log(nombres);

// const nombres = ["andres", "fernando", "mauricio", "juan"];
// console.log(nombres.join(" === "));  // genera un string con lso elementos del arreglo
// separados por el parametro insertado

// const datos = ["andres", "ruiz"];
// console.log(datos.join("\n")); // \n  es un salto de linea

// const nombres = ["andres", "ruiz"];
// const mascotas = ["maxi", "zeus"];
// const varios = mascotas.concat(nombres);  // unir arreglos
// console.log(varios);


// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];
// const copia = nombres.slice(1, 4);   // crea una copia de un fragmento del arreglo
// console.log(copia);

// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];
// console.log(nombres.indexOf("miguel")); // me dice la posicion donde se encuentra el elemento

// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];
// console.log(nombres.includes("juan"));
// console.log(nombres.includes("veronica")); //  indica si hay un valor en el arreglo con true y false

// const nombres = ["andres", "pedro", "miguel", "fernando", "mauricio", "juan"];
// nombres.reverse();

// console.log(nombres);


// const productos = ["cafe", "pan", "chocolate"];

// let producto = prompt("ingrese el producto a buscar");
// alert(productos.includes(producto));

// console.log(productos);

// let producto = prompt("ingrese el producto a agregar");
// productos.push(producto);

// for(let index = 0; index < productos.length; index++){
//     alert(productos[index]);
// }

// const productos = ["cafe", "pan", "chocolate"];

// let producto = prompt("ingrese el producto a buscar");

// if(productos.includes(producto)){
//     alert(`si hay ${producto}`);
// }else{
//     alert(`no hay ${producto}`);
// }

// const productos = ["cafe", "pan", "chocolate"];
// let nombre = "manttequilla";
// let indicador = false;

// for (let index = 0; index < productos.length; index++){
//     if(productos[index] === nombre){
//         indicador = true;
//     }
// }

// if(indicador){
//     console.log(true);
// }else{
//     console.log(false);
// }


// const nombres = ["juan", "camilo", "andres"];

// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre);

//     if(index != -1){
//         nombres.splice(index, 1);

//         console.log(nombres);
//     }
// };

// eliminar("camilo");

const productos = [
{ id: 1, nombre: "pantalon", precio: 1000 },
{ id: 2, nombre: "camisa", precio: 850 },
{ id: 3, nombre: "gorra", precio: 640 },    
{ id: 4, nombre: "zapato", precio: 1250 },
];

// for(let index = 0; index < productos.length; index++){
//     console.log(productos[index].nombre);
// }

for(const producto of productos){
    console.log(producto.nombre);
}