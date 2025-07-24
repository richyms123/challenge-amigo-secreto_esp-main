let listaAmigos = [];
let listaAmigosSorteados = [];
function ValidarEntrada(){
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo === "") {
        alert("Por favor, ingrese un nombre.");
        return false;
    }
    return true;
}

function agregarAmigo(){
    if (!ValidarEntrada()) return;

    let amigo = document.getElementById("amigo").value.trim().toLowerCase();
    
    if( listaAmigos.includes(amigo)) {
        alert("El nombre ya está en la lista.");
        return;
    }
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = ""; 
    mostrarListaAmigos();
}

function mostrarListaAmigos(){
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if(listaAmigos.length<2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    let resultadoHtml=document.getElementById("resultado");
    let amigoGanador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    if (listaAmigosSorteados.length === listaAmigos.length) {
        reiniciarSorteo();
        return;
    }
    if( listaAmigosSorteados.includes(amigoGanador)) {
        sortearAmigo();
    } else {
        listaAmigosSorteados.push(amigoGanador);
        resultadoHtml.innerHTML = "El amigo secreto es: " + amigoGanador;
    }

}

function reiniciarSorteo() {
    listaAmigos = [];
    listaAmigosSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}