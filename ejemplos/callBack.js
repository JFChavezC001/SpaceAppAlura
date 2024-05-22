function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000);
}
function dos (tres) {
    console.log("dos")
    setTimeout(tres, 2000);
}

function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro, 2000);
}

function cuatro (cinco) {
    console.log("cuatro")
    setTimeout(cinco, 2000);
}

function cinco () {
    console.log("cinco")
}

setTimeout( ()=> uno(dos),2000)

//CalBack Hell
setTimeout(()=>uno(
    ()=>dos(
        ()=>tres(
            ()=>cuatro(
                ()=>cinco(),
            )
        )
    )
    ),5000)


/*
//funcion aasincrona
setTimeout(()=> uno(dos),5000)//recibe otra funcion como parametro


//funcion anonima

const nombre = function(){
    console.log("nombre");
}
nombre()

//arrow functions
const persona = () => {console.log("Barbara");}//no es necesario poner las llaves cuando solo es una linea de codigo

persona();

()=> console.log();
*/