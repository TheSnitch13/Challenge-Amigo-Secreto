// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function nuevoAmigo (){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if(nombre == ""){
        alert("Debes escribir un nombre");
    }
    amigos.push(nombre);
    console.log(amigos[amigos.length -1]);
    document.getElementById("amigo").value = "";
}