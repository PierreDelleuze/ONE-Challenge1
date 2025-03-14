// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []; // Array que contiene los nombres de los amigos

//Esta función lee el nombre del amigo ingresado y lo agrega a la lista
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    // Verificar que el campo no esté vacío
    if(!amigo){
        alert("Debes ingresar un nombre");
        return;
    }
    //Verificar que el nombre ya no ha sido ingresado 
    if (listaAmigos.includes(amigo)) {
        alert ("Este nombre ya fue ingresado")
        inputAmigo.value = '';
        inputAmigo.focus();
        return
    }
    listaAmigos.push(amigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    mostrarAmigos();
    //console.log(listaAmigos);
}

//Esta función muestra lal lista de amigos ya ingresados
function mostrarAmigos(){
    let verAmigos = document.getElementById("verAmigos");
    verAmigos.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        verAmigos.appendChild(item);
    }
}

//Esta función sortea el amigo secreto entre los nombres ingresados
function sortearAmigo(){
    //Imponemos como condición que la lista contenga al menos 3 nombres
    if(listaAmigos.length < 3){
        alert("La lista debe contar al menos 3 amigos");
        return;
    }
    let numeroGenerado = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = document.getElementById("amigoSecreto");
    amigoSecreto.innerHTML = `Tu amigo(a) secreto(a) es: ${listaAmigos[numeroGenerado]}`;
    //console.log(numeroGenerado);
    //console.log(listaAmigos[numeroGenerado]);
    return;
}

