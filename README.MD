# Café Origen - Motor de análisis de ventas v0.1

## ¿Qué es este proyecto?

Café Origen es un proyecto desarrollado en JavaScript con Node.js que permite analizar información de ventas de productos de café y accesorios.

Su objetivo es facilitar la consulta de indicadores comerciales y generar reportes organizados para apoyar la toma de decisiones.

## ¿Cómo ejecutar el proyecto?

1. Tener instalado Node.js.
2. Abrir una terminal en la carpeta principal del proyecto.
3. Ejecutar el siguiente comando:

```bash
node src/reporte.js
```

4. El sistema mostrará automáticamente el reporte completo en la terminal.

No es necesario modificar ni abrir los archivos de código para consultar los resultados.

## ¿Qué preguntas responde el proyecto?

- ¿Cuánto dinero se ha vendido en total?
- ¿Cuántas unidades se han vendido?
- ¿Cuál es el ticket promedio?
- ¿Cuánto dinero se ha vendido en cada ciudad?
- ¿Cuántas unidades se han vendido por producto?
- ¿Cuáles son los tres productos que más dinero generan?
- ¿Cuánto se vendió en una fecha específica?
- ¿Qué sucede cuando se consulta un día sin ventas?

## Funcionalidades principales

- Cálculo de indicadores comerciales.
- Agrupación de ventas por ciudad.
- Agrupación de unidades por producto.
- Clasificación de los productos más vendidos por valor.
- Consulta de ventas por fecha.
- Formato monetario colombiano.
- Validación de datos y casos sin ventas.

## Tecnologías utilizadas

- JavaScript.
- Node.js.
- CommonJS (require y module.exports).
- Métodos de arreglos: reduce(), filter(), map(), sort() y forEach().

## Versión

**v0.1 - Motor inicial de análisis de ventas de Café Origen.**