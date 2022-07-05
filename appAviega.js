// variables
let stockGral = 100;
let stockVip = 23;
let lugar;

// funciones
const comprarGral = (cant) => {
    if (stockGral > cant){
        stockGral = stockGral - cant;
        console.log(`Compra exitosa, quedan ${stockGral} entradas.`);
    } else {
        console.log(`No se pudo registrar su compra, quedan ${stockGral} entradas.`);
    }
}

const comprarVip = (cant) => {
    if (stockVip > cant){
        stockVip = stockVip - cant;
        console.log(`Compra exitosa, quedan ${stockVip} entradas.`);
    } else {
        console.log(`No se pudo registrar su compra, quedan ${stockVip} entradas.`);
    }
}


// menu
do {
    lugar = Number(prompt('Seleccione el lugar que desea comprar:\n\n1 - General\n2 - VIP (incluye Meet & Greet)\n3 - Salir '));
    let cant;

    switch (lugar) {
        case 1:
            cant = Number(prompt('Ingrese la cantidad de entradas que desea:'));
            comprarGral(cant);
            break;
        case 2:
            cant = Number(prompt('Ingrese la cantidad de entradas que desea:'));
            comprarVip(cant);
            break;
        case 3:
            alert('Adios!');
            break;
        default:
            alert('Opcion incorrecta');
            break;
    }

} while(lugar !== 3);