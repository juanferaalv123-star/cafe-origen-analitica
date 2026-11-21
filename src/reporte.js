
const ventas = require("./datos");

const {
    totalVendido,
    unidadesVendidas,
    ticketPromedio,
    ventaMayor,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");


function pesos(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}


function separador() {
    console.log("=".repeat(55));
}


function titulo(texto) {
    separador();
    console.log(texto.toUpperCase());
    separador();
}


console.log("\n");
titulo("REPORTE DE VENTAS - CAFE ORIGEN");

console.log("Fecha del reporte: 21/11/2026");
console.log("Registros analizados:", ventas.length);


titulo("1. RESUMEN GENERAL");

console.log("Total vendido:".padEnd(30), pesos(totalVendido(ventas)));
console.log("Unidades vendidas:".padEnd(30), unidadesVendidas(ventas));
console.log("Ticket promedio:".padEnd(30), pesos(ticketPromedio(ventas)));

const mayor = ventaMayor(ventas);

console.log("Producto de la venta mayor:".padEnd(30), mayor.producto);
console.log("Valor de la venta mayor:".padEnd(30), pesos(
    mayor.cantidad * mayor.precio
));


titulo("2. VENTAS POR CIUDAD");

const ciudades = totalPorCiudad(ventas);

for (const clave of Object.keys(ciudades)) {
    console.log(
        ciudades[clave].ciudad.padEnd(25),
        pesos(ciudades[clave].total)
    );
}


titulo("3. UNIDADES POR PRODUCTO");

const productos = unidadesPorProducto(ventas);

for (const producto of Object.keys(productos)) {
    console.log(
        producto.padEnd(30),
        productos[producto] + " unidades"
    );
}


titulo("4. TOP 3 PRODUCTOS POR VALOR");

const top3 = topProductosPorValor(ventas, 3);

top3.forEach((producto, indice) => {
    console.log(
        `${indice + 1}. ${producto.producto.padEnd(27)} ${pesos(producto.total)}`
    );
});


titulo("5. RESUMEN DE UN DÍA CON VENTAS");

const diaConVentas = ventasDelDia(ventas, "2026-09-01");

console.log("Fecha: 2026-09-01");
console.log("Número de ventas:", diaConVentas.length);
console.log("Unidades:", unidadesVendidas(diaConVentas));
console.log("Total vendido:", pesos(totalVendido(diaConVentas)));

// 6. RESUMEN DE UN DÍA SIN VENTAS
titulo("6. RESUMEN DE UN DÍA SIN VENTAS");

const diaSinVentas = ventasDelDia(ventas, "2026-09-07");

console.log("Fecha: 2026-09-07");
console.log("Número de ventas:", diaSinVentas.length);
console.log("Unidades:", unidadesVendidas(diaSinVentas));
console.log("Total vendido:", pesos(totalVendido(diaSinVentas)));

separador();
console.log("FIN DEL REPORTE");
separador();
