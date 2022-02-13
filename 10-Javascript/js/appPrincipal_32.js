console.log(document);

/*Propiedades del navegador */
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.head);

/*los métodos son funciones que estan dentro de los objetos */

console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.log(document.getElementById("tituloWeb").innerHTML);

console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));

/*Solo pinta el primer elemento */
console.log(document.querySelector("text-danger"));
/*All pinta todos los elementos */
console.log(document.querySelectorAll("h1"));

/*¿Cómo hacer para seleccionar los elementos de una clase */
console.log(document.querySelectorAll(".container .text-danger"));

/* Seleccionamos el elemento que nosotros queremos manipular, al ser un elemento 
lo podemos guardar en una variable
*/

const h1 = document.getElementById("tituloWeb");

h1.textContent = "nuevo texto desde js";
h1.style.backgroundColor = "red";

/*
console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);
*/
