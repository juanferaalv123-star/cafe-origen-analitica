
function generarVentas(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("La cantidad de ventas debe ser un entero positivo o cero");
  }

  const productos = [
    { nombre: "Origen Huila 500 g", precio: 42000 },
    { nombre: "Origen Nariño 250 g", precio: 26000 },
    { nombre: "Prensa francesa", precio: 95000 },
    { nombre: "Origen Sierra 500 g", precio: 45000 },
    { nombre: "Molino manual", precio: 120000 }
  ];

  const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];

  const cantidadClientes = Math.max(1, Math.floor(n / 3));
  const clientes = [];

  for (let i = 1; i <= cantidadClientes; i++) {
    clientes.push("C" + String(i).padStart(3, "0"));
  }

  const ventas = [];

  for (let i = 0; i < n; i++) {
    const producto = productos[Math.floor(Math.random() * productos.length)];
    const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
    const cliente = clientes[Math.floor(Math.random() * clientes.length)];
    const cantidad = Math.floor(Math.random() * 5) + 1;

    const dia = String(Math.floor(Math.random() * 30) + 1).padStart(2, "0");

    ventas.push({
      id: i + 1,
      fecha: `2026-09-${dia}`,
      cliente,
      producto: producto.nombre,
      ciudad,
      cantidad,
      precio: producto.precio
    });
  }

  return ventas;
}

module.exports = generarVentas;

