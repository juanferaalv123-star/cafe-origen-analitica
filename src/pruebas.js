
const ventas = require("./datos");

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
} = require("./analitica");

// Arreglos de prueba
const unRegistro = [ventas[0]];
const arregloVacio = [];

// Función para probar todos los indicadores
function probar(datos, nombre) {
    console.log("\n--- " + nombre + " ---");

    console.log("Total vendido:", totalVendido(datos));
    console.log("Unidades vendidas:", unidadesVendidas(datos));
    console.log("Venta mayor:", ventaMayor(datos));
    console.log("Ticket promedio:", ticketPromedio(datos));
    console.log("Ventas en Medellín:", ventasPorCiudad(datos, "Medellín"));
}

// Ejecutar las tres pruebas
probar(ventas, "ARREGLO COMPLETO");
probar(unRegistro, "UN SOLO REGISTRO");
probar(arregloVacio, "ARREGLO VACÍO");
