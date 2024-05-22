const url= "https://api.nasa.gov/planetary/apod?api_key=MVQmV3zGc1TzgiKldQT3UBIXUnySROACmpF1q872&count=15"


async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url)
        let datosImagenes= await fetchImagen.json()
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]");

        datosImagenes.forEach(elemento =>{
            const conenido = 
            `
                <li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML+conenido//remplaza un espacio por otro que se va a atribuir
        })
    }
    catch(error){
        console.log(error);
    }
}
listaImagenes()

//then y catch
/*function listaImagenes(){
    fetch(url).
    then(response=>response.json())
    .then(datosImagenes=>{
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]");

        datosImagenes.forEach(elemento =>{
            const conenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML+conenido//remplaza un espacio por otro que se va a atribuir
        });
    })
    .catch(error => console.log(error))
}
listaImagenes()*/