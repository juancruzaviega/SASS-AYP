class Producto {
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarProducto(){
        return "id: " + 
        this.id + 
        " precio: " + 
        this.precio + 
        " " + 
        " producto: " + 
        this.nombre + 
        "\n";
    }
}

function comprar(nombre, email, tel, productosEnCarro){
let cant = productosEnCarro.reduce((acc, item)=> item.precio + acc, 0);
    alert('Gracias ' + nombre + ' por tu compra! \n Total: $' + cant);
}






let productos = [
    new Producto(1, 'Entrada General - Campo', 1500, 'general'),
    new Producto(2, 'Entrada General - Platea', 2000, 'general'),
    new Producto(3, 'Entrada VIP + Meet & Greet', 3500, 'vip'),
];

let categorias = ["General", "VIP"];

let productosEnCarro = [];


let categoria = "";

while(categoria != "salir" && categoria != null){
    let aux = categorias.join(", ");
    categoria = prompt(
        'Ingrese una categoria para comprar o ingrese "salir": \n(' + aux + ')');
        console.log(categoria);
    if (categoria != "salir" && categoria != null){
        let productosFiltradoPorCategoria = productos.filter(
            (item) => item.categoria == categoria
            );
            let cartel = "";
            for (let i = 0; i < productosFiltradoPorCategoria.length; i++){
                cartel += productosFiltradoPorCategoria[i].mostrarProducto(); 
            }
            let idSeleccionado = parseInt(
                prompt('Seleccione id del tipo de entrada que desea comprar: \n\n' + cartel)
            );

            let productoParaCarro = productosFiltradoPorCategoria.find(item=> item.id == idSeleccionado);

            if(productoParaCarro){
                productosEnCarro.push(productoParaCarro);
            }
            
        }
}



if(productosEnCarro.length > 0){
    alert('Ingrese sus datos para finalizar la compra');
    let nombre = prompt('Ingrese su nombre:');
    let email = prompt('Ingrese su email:');
    let tel = prompt('Ingrese su telefono celular:');
    comprar(nombre, email, tel, productosEnCarro);

}