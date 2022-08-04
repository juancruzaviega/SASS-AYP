let productos = [
{ id: 100, nombre: "Entrada Campo", precio: 1550 },
{ id: 101, nombre: "Entrada Platea", precio: 2500 },
{ id: 102, nombre: "Entrada VIP + Meet & Greet", precio: 3500 },
];

let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;

if (!aux) {
productosEnCarro = [];
} else {
productosEnCarro = JSON.parse(aux);
pintarCarrito();
}

function pintarListado() {
let aux = "";
for (let i = 0; i < productos.length; i++) {
    aux =
aux +
`<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer; border: 1px solid grey;">
<h3> Nombre: ${productos[i].nombre} </h3>
<p> Precio: $ ${productos[i].precio} </p>
<p> ID: ${productos[i].id} </p>
    </div>`;
}
document.getElementById("div-productos").innerHTML = aux;
}
pintarListado();

function meterAlCarro(objetosProducto) {
productosEnCarro.push(objetosProducto);
localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
pintarCarrito();
}

function borrarDelCarro(id) {
productosEnCarro.splice(id, 1);
localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
pintarCarrito();
}

function pintarCarrito() {
let aux = "";
for (let i = 0; i < productosEnCarro.length; i++) {
    aux =
aux +
`<div>
<h3> Nombre: ${productosEnCarro[i].nombre} </h3>
<p> Precio: $ ${productosEnCarro[i].precio} </p>
<p> ID: ${productosEnCarro[i].id} </p>
<p onclick="borrarDelCarro(${i})" style="cursor: pointer; border: 2px solid red; display: inline-block;"> Borrar del carro 🗑️ </p>
    </div>`;
}
document.getElementById("div-carrito").innerHTML = aux;
}

function manejeElClick() {
    Toastify({
        text: "Producto agregado al carro!",
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
        text: "Producto borrado del carro!",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        
        style: {
            background: 'linear-gradient(to right, black, red)',
            
        }
    }).showToast();

}

