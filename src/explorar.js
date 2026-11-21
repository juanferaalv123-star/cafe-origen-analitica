const ventas = require("./ventas");



console.log("Cantidad de registros:", ventas.length);
console.log("Primer registro:", ventas[0]);
console.log("Último registro:", ventas[ventas.length - 1]);
console.log("Producto en posición 4:", ventas[4].producto);
console.table(ventas);