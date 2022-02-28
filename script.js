class Clase {
    constructor(turno, profe, precio) {
        this.turno = turno;
        this.profe = profe;
        this.precio = precio;
    }
}

const clase1 = new Clase("Maniana", "Pablo", 2000)
const clase2 = new Clase("Tarde", "Matias", 2200)
const clase3 = new Clase("Tarde", "Maxi", 2500)

let autos = [clase1, clase2, clase3]

let botonClase = document.getElementById("botonClase")
let divClase = document.getElementById("divClase")
let formPersona = document.getElementById("idForm")

botonClase.addEventListener('click', () => {
    autos.forEach((clase, indice) => {
        divClase.innerHTML += `
            <div class="card" id="clase${indice}" style="width: 18rem;"> 
                <div class="card-body">
                <h5 class="card-title">Turno: ${clase.turno}</h5>
                <p class="card-text">Profe: ${clase.profe}</p>
                <p class="card-text">Precio: $${clase.precio}</p>
                <button class="btn btn-dark"> Eliminar </button>
                </div>
            </div>
        ` 
    })
    
})

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputNombre = document.getElementById('nombreForm')
    let inputApellido = document.getElementById('apellidoForm')
    console.log(inputNombre.value)
    console.log(inputApellido.value)
})
