console.log("hola, funciono de 10...!!!!")

// class Producto

class Producto{

    constructor(id, tipoProducto, nombre, descripcion, imagen, precio) {
        this.id=id
        this.tipoProducto = tipoProducto
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = imagen
        this.precio = precio;
        
    }

}

// array de objetos con las propiedades de la class Producto

const productosTienda = [
    {
        id: 1,
        tipoProducto: "Manta",
        nombre: "Manta de Polar Soft",
        descripcion: "Manta de 1m por 0.75m, super suave de exelente calidad, con diseños exclusivos.",
        img:"../assetsnav/productoalgodonprincipal-min.jpg",
        precio: 4900,

    },

    {
        id: 2,
        tipoProducto: "Babero",
        nombre: "Babero Bandana",
        descripcion: "Babero tipo bandana de algodón y gabardina, con diseños originales y artesanales",
        img:"../assetsnav/productobaberoprincipal-min.jpg",
        precio: 900,
    },

    {
        id: 3,
        tipoProducto: "Toallas, Toalloes y Babitas",
        nombre: "Toallón Doble con capucha",
        descripcion: "Toallón con capucha de algodón doble felpa, super absorvente, con capucha con diseños infantiles. Medidas de 1m por 1m.",
        img:"../assetsnav/productotoallonprincipal.jpeg",
        precio: 4590,
    },

    {
        id: 4,
        tipoProducto: "Toallas, Toallones y Babitas",
        nombre: "Set Babitas Toalla Doble Algodón",
        descripcion: "Babita de algodón doble felpa, super absorvente, con diseños infantiles super tiernos e irrepetibles. Medidas de 35cm por 25cm.",
        img:"../assetsnav/productosetbabitaprincipalrotada.png",
        precio: 865,
    },
]

let carrtioDeCompras = []


//compruebo a modo de test los objetos que compone el array

console.log(productosTienda)

//capturo el elemento productContainer de HTML para luego crear los objetos en las cards que se mostraran en el HTML

let productContainer = document.getElementById("productContainer")




// test para ver que está capturando

console.log(productContainer)

//IMPORTANTE: se debe crear un forEach que recorra el array y cree el elemento por medio del innerHTML

productosTienda.forEach((elementoTienda)=>{

    //test para ver que está recorriendo

   console.log(elementoTienda)
   console.log(elementoTienda.nombre)

    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
    
    <div class="col">
    <div class="card">
      <img src="${elementoTienda.img}" class="card-img-top" alt="producto tienda">
      <div class="card-body">
        <p class="card-identificador">Identificador: ${elementoTienda.id} </p>
        <h5 class="card-title">${elementoTienda.nombre}</h5>
        <p class="card-tipoProducto">${elementoTienda.tipoProducto}</p>
        <p class="card-text">${elementoTienda.descripcion}</p>
        <h6 class="card-precio"><strong>Precio:<strong></h6>
        <h3 class="card-tipoProducto">${elementoTienda.precio}</h3>
      </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button id="botonAgregarCarrito" "class=btn btn-secondary m-2 type="button">Agregar al Carrito</button>
        </div>
    </div>
  </div>
    `

    // IMPORTANTE productContainer - representa el elemento en el HTML - y el elemento dentro del paréntesis es ele elemento creado en este caso el DIV que contiene cadatarjeta.
    productContainer.append(contenedor)

    let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")

    botonAgregarCarrito.addEventListener("click", agregarCarrito)

})



function agregarCarrito(){
    //test
    console.log("agregado al carrito")

    carrtioDeCompras.push()

    //test carrito de compras push
    console.log(carrtioDeCompras)
    console.log(carrtioDeCompras.length)

    
    
}


const botonGuardar = document.getElementById('guardarDatos');
const botonRecuperar = document.getElementById('recuperarDatos');
const resultadoDiv = document.getElementById('resultado');

botonGuardar.addEventListener('click', guardarDatos);
botonGuardar.addEventListener('click', guardarDatos);
botonRecuperar.addEventListener('click', recuperarDatos);



// Función para guardar los datos en localStorage
function guardarDatos() {
  
  const datosJSON = JSON.stringify(productosTienda);

  
  localStorage.setItem('datosTienda', datosJSON);

  
  alert('Los datos se han guardado en localStorage.');
}

//test para ver funcionamiento - ejemplo clase
const reucuperarDatosTienda = localStorage.getItem("datosTienda")
console.log(reucuperarDatosTienda)

//test para ver si funciona - de acuerdo a ejemplo de clase
const reucuperarDatosTiendaObjeto = JSON.parse(localStorage.getItem("datosTienda"))
console.log(reucuperarDatosTiendaObjeto)

//recuperar datos e imprmir
function recuperarDatos() {
   
    const datosJSON = localStorage.getItem('datosTienda');
  
    
    if (datosJSON) {
      
      const datosRecuperados = JSON.parse(datosJSON);
  
      
      resultadoDiv.textContent = JSON.stringify(datosRecuperados);
    } else {
      
      resultadoDiv.textContent = 'No se encontraron datos en el localStorage.';
    }
  }


