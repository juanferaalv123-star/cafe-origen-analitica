const ventas = require("./datos");


// 1. Calcular el valor de una venta
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

// 2. Calcular el total vendido
function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total += valorVenta(venta);
    }

    return total;
}

// 3. Calcular las unidades vendidas
function unidadesVendidas(ventas) {
    let unidades = 0;

    for (const venta of ventas) {
        unidades += venta.cantidad;
    }

    return unidades;
}

// 4. Encontrar la venta de mayor valor
function ventaMayor(ventas) {
    if (ventas.length === 0) {
        return null;
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}

// 5. Calcular el ticket promedio
function ticketPromedio(ventas) {
    let total = 0;
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
            contador++;
        }
    }

    if (contador === 0) {
        return 0;
    }

    return total / contador;
}

// 6. Calcular las ventas por ciudad
function ventasPorCiudad(ventas, ciudad) {
    let total = 0;

    const ciudadBuscada = ciudad.trim().toLowerCase();

    for (const venta of ventas) {
        const ciudadVenta = venta.ciudad.trim().toLowerCase();

        if (ciudadVenta === ciudadBuscada) {
            total += valorVenta(venta);
        }
    }

    return total;
}


// 1. Calcular el valor de una venta
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

// 2. Calcular el total vendido
function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total += valorVenta(venta);
    }

    return total;
}

// 3. Calcular las unidades vendidas
function unidadesVendidas(ventas) {
    let unidades = 0;

    for (const venta of ventas) {
        unidades += venta.cantidad;
    }

    return unidades;
}

// 4. Encontrar la venta de mayor valor
function ventaMayor(ventas) {
    if (ventas.length === 0) {
        return null;
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}

// 5. Calcular el ticket promedio
function ticketPromedio(ventas) {
    let total = 0;
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
            contador++;
        }
    }

    if (contador === 0) {
        return 0;
    }

    return total / contador;
}

// 6. Calcular las ventas por ciudad
function ventasPorCiudad(ventas, ciudad) {
    let total = 0;

    const ciudadBuscada = ciudad.trim().toLowerCase();

    for (const venta of ventas) {
        const ciudadVenta = venta.ciudad.trim().toLowerCase();

        if (ciudadVenta === ciudadBuscada) {
            total += valorVenta(venta);
        }
    }

    return total;
}


function totalVendidoM(ventas) {
    return ventas.reduce((total, venta) => {
        return total + valorVenta(venta);
    }, 0);
}

function unidadesVendidasM(ventas) {
    return ventas.reduce((total, venta) => {
        return total + venta.cantidad;
    }, 0);
}

function ventasPorCiudadM(ventas, ciudad) {
    const ciudadBuscada = ciudad.trim().toLowerCase();

    return ventas
        .filter(venta =>
            venta.ciudad.trim().toLowerCase() === ciudadBuscada
        )
        .reduce((total, venta) => {
            return total + valorVenta(venta);
        }, 0);
}


function totalPorCiudad(ventas) {
    return ventas.reduce((acumulado, venta) => {
        const ciudad = venta.ciudad.trim();

        const clave = ciudad.toLowerCase();

        if (!acumulado[clave]) {
            acumulado[clave] = {
                ciudad: ciudad,
                total: 0
            };
        }

        acumulado[clave].total += valorVenta(venta);

        return acumulado;
    }, {});
}


function unidadesPorProducto(ventas) {
    return ventas.reduce((acumulado, venta) => {
        const producto = venta.producto;

        if (!acumulado[producto]) {
            acumulado[producto] = 0;
        }

        acumulado[producto] += venta.cantidad;

        return acumulado;
    }, {});
}



function topProductosPorValor(ventas, k) {
    const productos = ventas.reduce((acumulado, venta) => {
        const producto = venta.producto;

        if (!acumulado[producto]) {
            acumulado[producto] = 0;
        }

        acumulado[producto] += valorVenta(venta);

        return acumulado;
    }, {});

    return Object.entries(productos)
        .map(([producto, total]) => ({
            producto,
            total
        }))
        .sort((a, b) => b.total - a.total)
        .slice(0, k);
}


function ventasDelDia(ventas, fecha) {
    return ventas.filter(venta => venta.fecha === fecha);
}


function totalVendidoInstrumentado(ventas, contador) {
  let total = 0;

  for (const venta of ventas) {
    contador.operaciones++; // Visita un elemento
    total += venta.cantidad * venta.precio;
  }

  return total;
}

function ventaMayorInstrumentada(ventas, contador) {
  if (ventas.length === 0) return null;

  let mayor = ventas[0];

  for (const venta of ventas) {
    contador.operaciones++; // Visita un elemento

    contador.operaciones++; // Realiza una comparación
    if (venta.cantidad * venta.precio >
        mayor.cantidad * mayor.precio) {
      mayor = venta;
    }
  }

  return mayor;
}

function totalPorCiudadInstrumentado(ventas, contador) {
  const acumulado = {};

  for (const venta of ventas) {
    contador.operaciones++; // Visita un elemento

    const clave = venta.ciudad.trim().toLowerCase();

    contador.operaciones++; // Comprueba si existe el grupo
    if (!acumulado[clave]) {
      acumulado[clave] = {
        ciudad: venta.ciudad.trim(),
        total: 0
      };
    }

    acumulado[clave].total += venta.cantidad * venta.precio;
  }

  return acumulado;
}

function primeraVenta(ventas, contador) {
  contador.operaciones++;
  return ventas.length > 0 ? ventas[0] : null;
}

module.exports.totalVendidoInstrumentado = totalVendidoInstrumentado;
module.exports.ventaMayorInstrumentada = ventaMayorInstrumentada;
module.exports.totalPorCiudadInstrumentado = totalPorCiudadInstrumentado;
module.exports.primeraVenta = primeraVenta;


function clientesRecurrentes(ventas) {
  const recurrentes = [];

  for (let i = 0; i < ventas.length; i++) {
    for (let j = i + 1; j < ventas.length; j++) {
      if (
        ventas[i].cliente === ventas[j].cliente &&
        !recurrentes.includes(ventas[i].cliente)
      ) {
        recurrentes.push(ventas[i].cliente);
      }
    }
  }

  return recurrentes;
}
module.exports = {
  
  clientesRecurrentes
};

const ventas = require("./datos");
const { clientesRecurrentes } = require("./analitica");

console.log("Clientes recurrentes:");
console.log(clientesRecurrentes(ventas));


function totalCiudadCadena(ventas, ciudad) {
  const ciudadBuscada = ciudad.trim().toLowerCase();

  return ventas
    .map(venta => ({
      ...venta,
      ciudad: venta.ciudad.trim().toLowerCase()
    }))
    .filter(venta => venta.ciudad === ciudadBuscada)
    .map(venta => venta.cantidad * venta.precio)
    .reduce((total, valor) => total + valor, 0);
}



function totalCiudadUnaPasada(ventas, ciudad) {
  const ciudadBuscada = ciudad.trim().toLowerCase();
  let total = 0;

  for (const venta of ventas) {
    const ciudadVenta = venta.ciudad.trim().toLowerCase();

    if (ciudadVenta === ciudadBuscada) {
      total += venta.cantidad * venta.precio;
    }
  }

  return total;
}





module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
    totalCiudadCadena,
totalCiudadUnaPasada
};
