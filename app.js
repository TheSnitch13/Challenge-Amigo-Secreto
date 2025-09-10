// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function nuevoAmigo (){
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    console.log(amigos[amigos.length -1]);
}