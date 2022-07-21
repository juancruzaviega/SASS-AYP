let productos = [];

let formulario;
let inputNombre;
let inputPrecioCompra;
let inputPrecioVenta;
let inputCantidad;
let tabla;
let errores;

class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1);
}}

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("nombre");
    inputPrecioCompra = document.getElementById("precioCompra");
    inputPrecioVenta = document.getElementById("precioVenta");
    inputCantidad = document.getElementById("cantidad");
    tabla = document.getElementById("tablaProductos");
    errores = document.querySelector(".errores");
    errores.style.display = "none";
}
inicializarElementos();


// let formulario = document.getElementById("formulario");
formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoProducto = new Producto(inputNombre.value, inputPrecioCompra.value, inputPrecioVenta.value, inputCantidad.value);
    if(inputNombre.value != "" &&  inputPrecioVenta.value != "" &&  inputCantidad.value != "" && inputPrecioCompra.value != ""){
    productos.push(nuevoProducto);
    productos.reverse();

    limpiarTabla();

    agregarProductosTabla();
    errores.style.display = "none";
    formulario.reset();
    }else{
        errores.style.display = "block";
        errores.style.color = "red";
    }
    
}

function agregarProductosTabla(){
    productos.forEach(producto => {
        let tabla = document.querySelector(".tabla");
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precioCompra}</td>
        <td>${producto.precioVenta}</td>
        <td>${producto.cantidad}</td>
        `
        tabla.append(filaTabla)
    });
}

// let inputNombre = document.getElementById("nombre")
// console.log(inputNombre)