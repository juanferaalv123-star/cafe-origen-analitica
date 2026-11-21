
// Importar las ventas
const ventas = require("./datos");

// Importar las funciones
const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require("./analitica");

// Función para comparar resultados
function verificar(nombre, resultadoCiclo, resultadoMetodo) {
    if (resultadoCiclo === resultadoMetodo) {
        console.log(nombre + ": OK");
    } else {
        console.log(nombre + ": DIFERENTE");
        console.log("Ciclo:", resultadoCiclo);
        console.log("Método:", resultadoMetodo);
    }
}


verificar(
    "Total vendido",
    totalVendido(ventas),
    totalVendidoM(ventas)
);


verificar(
    "Unidades vendidas",
    unidadesVendidas(ventas),
    unidadesVendidasM(ventas)
);

// Comparar ventas por ciudad
verificar(
    "Ventas por Medellín",
    ventasPorCiudad(ventas, "Medellín"),
    ventasPorCiudadM(ventas, "Medellín")
);
