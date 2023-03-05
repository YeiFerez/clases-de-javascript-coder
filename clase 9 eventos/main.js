// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// let evento = prompt("ingrese el evento");  SOLO FUE DE EJEMPLO, PARA ponerlo en "click" y demostrar dinamismo
// boton.addEventListener("click", () => console.log("click"));

// boton.onclick = () => console.log("click"); 

// const saludar = (nombre) => {
//     console.log(`Hola ${nombre}`);
// };

// // let nombre = prompt("Ingrese su nombre");
// boton.addEventListener("click", () => saludar(nombre));

/* 
El addEventListener no admite la ejecucion de la funcion, se debe pasar solo su nombre
o la declaracion de una funcion
*/

// boton.addEventListener("mousedown", () => console.log("mousedown"));    // se activa con solo mantener click
// boton.addEventListener("mouseup", () => console.log("mouseup"));          // mas rapido que el click
// boton.addEventListener("mouseover", () => console.log("mouseover"));   //  con solo pasar el puntero por encima
// boton.addEventListener("mouseout", () => console.log("mouseout"));   // si sale de la casilla, contrario al over
// boton.addEventListener("mousemove", () => console.log("mousemove"));    // moverse dentro , muchos click
// boton.addEventListener("click", () => console.log("click"));


// boton.addEventListener("mousedown", () => {
// saludo.className = "verde";
// });
// boton.addEventListener("click", () => {
// saludo.className = "rojo";
// });
// boton.addEventListener("mouseover", () => {
// saludo.className = "azul";
// });
// boton.addEventListener("mouseout", () => {
// saludo.className = "amarillo";
// });

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("keyup", () => console.log("keyup"));
// nombre.addEventListener("keydown", () => console.log("keydown"));

// nombre.addEventListener("keyup", (e) => {
//     if (e.key === "a") {
//         saludo.className = "rojo";
//     }else if(e.key === "s"){
//         saludo.className = "verde";
//     }else if(e.key === "d"){
//         saludo.className = "amarillo";
//     }else{
//         saludo.className = "azul";
//     }
// } );

//

// nombre.addEventListener("change", () => { 
//     console.log("change");
// });

// nombre.addEventListener("input", () => { 
//     console.log(nombre.value);
// });

// si quiero que cuando tenga @ aparezca blanco
// nombre.addEventListener("input", () => { 
//     if(!nombre.value.includes("@")){
//         saludo.className = "rojo";
//     }else{
//         saludo.className = "blanco";
//     }
// });




let formulario = document.getElementById("formulario");

// si quiero extraer los inputs
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let inputs = e.target.children;
//     console.log(inputs[0].value);
//     console.log(inputs[1].value);
// });

// con un if que borre el campo si no tiene @
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;
    
    if(!inputs[0].value.includes("@")){
        inputs[0].value = "";
    }
});