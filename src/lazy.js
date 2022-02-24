
let countLoad = 0
let countAdd = 0

const isIntersecting = (entry) => {

    return entry.isIntersecting //true dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src
    //cargue la imagen
    imagen.src = url;

    
    
    observer.unobserve(container)
}


const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})



// 
export const registerImage = (imagen) => {
    //intersectactionObserver
    observer.observe(imagen)
}

export const counterLoad = () => {
    const mesage = `😮 Las imagenes agregadas son:${countAdd} 
😁 Las imagenes cargadas son:${countLoad}
---------------------------------------------`
    console.log(mesage)
}