// function mayorQue(n){
//     return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); //  m => m > 5;
// console.log(mayorQueCinco(7));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); //  m => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));

const operaciones = (op) => {
    if (op === "sumar") {
        return (a, b) => a + b;
    }

    if (op === "restar") {
        return (a, b) => a - b;
    }

    if (op === "multiplicar") {
        return (a, b) => a * b;
    }

    if (op === "dividir") {
        return (a, b) => a / b;
    }
}

// let suma = operaciones("sumar");
// console.log(suma(7,10));

// let resta = operaciones("restar");
// console.log(resta(5,7));

// let operacionIngresada = prompt("Ingrese la operacion a realizar");
// let num1 = prompt("ingrese el primer numero");
// let num2 = prompt("ingrese el segundo numero");

// let operacionGenerada = operaciones(operacionIngresada);
// let resultado = `El resultado de la operacion es ${operacionGenerada(num1, num2)}`;

// alert(resultado);


// function iterar(arreglo, funcion){
//     for(const numero of arreglo){
//         funcion(numero);
//     }
// }

// iterar([1, 5, 3, 5, 8], console.log);

let productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "pantalon", precio: 700 },
    { id: 3, nombre: "gorra", precio: 1350 },
    { id: 4, nombre: "zapato", precio: 800 },
];

// recorre el arreglo
// productos.forEach(producto => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// })

// for (let index = 0; index < productos.length; index++) {
//     const element = productos[index];
//     console.log(element.nombre);
//     console.log(element.precio);
// }

// find  encuentra el primer elemento que cumpla la condicion dada
// let encontrado = productos.find(producto => producto.nombre === "camisa");
// console.log(encontrado);

// let nombre = prompt(" ingrese el nombre del producto");
// let encontrado = productos.find(producto => producto.nombre === nombre);

// let mensaje = `
// id: ${encontrado.id}
// nombre: ${encontrado.nombre}
// Precio: ${encontrado.precio}
// `;

// alert(mensaje);

// filter .. filtra los elementos que cumplan la condicion dada

// let filtrados = productos.filter( item => item.precio > 900);
// console.log(filtrados);

// let precio = parseInt(prompt("ingrese el valor minimo de producto"));
// let filtrados = productos.filter(item => item.precio > precio);

// filtrados.forEach((item) =>{
//     let mensaje = `
//     id: ${item.id}
//     nombre: ${item.nombre}
//     precio: ${item.precio}
//     `;
//     alert(mensaje);
// });


// let precio = parseInt(prompt("ingrese el valor minimo de producto"));
// let filtrados = productos.filter(item => item.precio > precio);
// let mensaje = "";

// filtrados.forEach((item) =>{
//     mensaje += `   // igual a mensaje + nuevo elemento que quiera concatenar
//     id: ${item.id}
//     nombre: ${item.nombre}
//     precio: ${item.precio}
//     `;
// });

// alert(mensaje);

// some ... verifica si existe al menos un elemento que cumple la condicion

// console.log(productos.some(item => item.nombre === "camisa"));
// console.log(productos.some(item => item.nombre === "media"));

// let producto = prompt("Ingrese el producto a buscar");
// let encontrado = productos.some((item) => item.nombre === producto);

// if(encontrado){
//     alert(`El producto ${producto} se encuentra disponible`);
// }else {
//     alert(`El producto ${producto} no se encuentra disponible`);
// }


//map .... trasnforma o moldea los datos
// let precios = productos.map((item) => item.precio);
// console.log(precios);

// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let preciosNavidad = productos.map((item) => {
//     return {
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio - item.precio* 0.21,
//     };
// });
  
// console.log(preciosNavidad);


// reduce ... simplifica todo un arreglo a un unico valor

// let numeros = [1, 2, 3, 4, 5];
// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// let totalProductos = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(totalProductos);


//sort .... para ordenar 
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]


// const items = [
// { name: "Pikachu", price: 21 },
// { name: "Charmander", price: 37 },
// { name: "Pidgey", price: 45 },    
// { name: "Squirtle", price: 60 }
// ]
// console.log( items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// }))

