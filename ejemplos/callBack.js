function uno () {
    console.log("uno")
}
function dos () {
    console.log("dos")
}

//funcion aasincrona
setTimeout(uno,5000)//recibe otra funcion como parametro
dos()