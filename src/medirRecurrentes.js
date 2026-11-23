
const generarVentas = require("./generador");
const { clientesRecurrentes } = require("./analitica");

const tamanos = [1000, 2000, 4000, 8000, 16000];

const resultados = [];

for (const n of tamanos) {
  console.log(`\nMidiendo ${n} ventas...`);

  const ventas = generarVentas(n);
  const etiqueta = `clientesRecurrentes con ${n} ventas`;

  const inicio = process.hrtime.bigint();

  console.time(etiqueta);
  const resultado = clientesRecurrentes(ventas);
  console.timeEnd(etiqueta);

  const fin = process.hrtime.bigint();
  const tiempoMs = Number(fin - inicio) / 1_000_000;

  resultados.push({
    ventas: n,
    clientesRecurrentes: resultado.length,
    tiempoMs: Number(tiempoMs.toFixed(3))
  });
}

console.log("\nTABLA DE RESULTADOS");
console.table(resultados);
