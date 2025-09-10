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
    listarAmigo();
}

function listarAmigo (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i=0; i<(amigos.length); i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo (){
    limpiar();
    if(!(amigos.length == 0)){
        let numeroIndice = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = document.getElementById("resultado");
        amigoSecreto.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = (`El amigo secreto sorteado es: ${amigos[numeroIndice]}`); 
        amigoSecreto.appendChild(li);  
    }
    else{
        alert("¡Debes ingresar amigos!")
    }
}

function limpiar(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}