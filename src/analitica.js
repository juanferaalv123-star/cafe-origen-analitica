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
    topProductosPorValor
};
