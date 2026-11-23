
const ventas = require("./datos");

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalPorCiudad
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

// Error de la gerente: prueba de ciudades
const ciudadesPrueba = [
    {
        ciudad: "Bogotá",
        cantidad: 1,
        precio: 26000
    },
    {
        ciudad: "Bogotá ",
        cantidad: 2,
        precio: 26000
    }
];

const resultado = totalPorCiudad(ciudadesPrueba);

console.log("Prueba de ciudades:");
console.log(resultado);

console.log(
    "¿Existe un solo grupo de Bogotá?",
    Object.keys(resultado).length === 1 ? "OK" : "DIFERENTE"
);

// Calcular promedio de ventas válidas
const validas = ventas.filter(venta => venta.cantidad > 0);

const total = validas.reduce(
    (acumulado, venta) => acumulado + valorVenta(venta),
    0
);

const promedio = validas.length > 0
    ? total / validas.length
    : 0;

console.log("Promedio de ventas válidas:", promedio);
