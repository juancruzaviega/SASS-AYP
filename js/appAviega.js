






const listaProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const precioTotal = document.getElementById('precioTotal');
let carrito = [];


document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito();
})
let myArray = [];


function mostrarProductos() { 
    fetch('../data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        res.forEach((producto) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <h3>${producto.name}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="manejeElClick()" id="agregar${producto.id}" class="boton-agregar" >Agregar al carro</button>
            `
            listaProductos.appendChild(div)

            const boton = document.getElementById(`agregar${producto.id}`)
            boton.addEventListener('click', () =>{
                agregarAlCarrito(producto.id)
            })
        }
        )
    }
)}
mostrarProductos();



const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map (prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }else{

    const item = stockProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    
    console.log(carrito);
}
actualizarCarrito();
}



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    
    const i = carrito.indexOf(item)
    carrito.splice(i, 1)
    actualizarCarrito()
}



const actualizarCarrito = () => {
contenedorCarrito.innerHTML = ""


    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${prod.name}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="btn-eliminar"><i class="fas fa-trash-alt">Eliminar</button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}







                function manejeElClick() {
                    Toastify({
                        text: "Agregado al carro!",
                        duration: 3000,
                        gravity: 'bottom',
                        position: 'left',
                        
                        style: {
                            background: 'linear-gradient(to right, black, green)',
                            
                        }
                    }).showToast();
                
                }
                
                function manejeElClickBorrar() {
                    Toastify({
                        text: "Carrito vacío!",
                        duration: 3000,
                        gravity: 'bottom',
                        position: 'left',
                        
                        style: {
                            background: 'linear-gradient(to right, black, red)',
                            
                        }
                    }).showToast();
                
                }
