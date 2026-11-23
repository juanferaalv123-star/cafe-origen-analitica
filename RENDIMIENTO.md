# INFORME TÉCNICO DE RENDIMIENTO
## Proyecto Café Origen — Motor de analítica

**Versión:** 0.1  
**Lenguaje:** JavaScript  
**Entorno:** Node.js  
**Objetivo:** Documentar el rendimiento temporal y espacial de las funciones del motor de analítica.

---

## 1. Clasificación de las funciones

En esta tabla se presenta la complejidad de cada función. La columna de mediciones debe completarse con los resultados obtenidos al ejecutar las pruebas con 10.000 ventas.

| Función | Qué hace | Complejidad temporal | Complejidad espacial | Justificación | Operaciones o tiempo con 10.000 ventas |
|---|---|---|---|---|---|
| `valorVenta` | Calcula cantidad por precio. | O(1) | O(1) | Realiza una multiplicación. | No medida individualmente. |
| `totalVendido` | Calcula el dinero total vendido. | O(n) | O(1) | Recorre las ventas una vez y acumula el resultado. | 10.000 operaciones instrumentadas. |
| `unidadesVendidas` | Suma las unidades vendidas. | O(n) | O(1) | Recorre todos los registros. | No medida individualmente. |
| `ventaMayor` | Encuentra la venta de mayor valor. | O(n) | O(1) | Recorre las ventas y guarda el registro mayor. | 20.000 operaciones instrumentadas. |
| `ticketPromedio` | Calcula el promedio de las ventas válidas. | O(n) | O(1) | Recorre las ventas y utiliza acumuladores. | No medida individualmente. |
| `ventasPorCiudad` | Calcula el total vendido en una ciudad. | O(n) | O(1) | Recorre el arreglo y suma las coincidencias. | No medida individualmente. |
| `totalVendidoM` | Suma las ventas utilizando `reduce`. | O(n) | O(1) | Reduce todos los registros a un único número. | No medida individualmente. |
| `unidadesVendidasM` | Suma las unidades mediante `reduce`. | O(n) | O(1) | Utiliza un acumulador. | No medida individualmente. |
| `ventasPorCiudadM` | Filtra ventas por ciudad y suma sus valores. | O(n) | O(n) | `filter` crea un arreglo auxiliar. | No medida individualmente. |
| `totalPorCiudad` | Agrupa el dinero vendido por ciudad. | O(n) promedio | O(k) | Recorre las ventas y almacena un acumulado por ciudad. | 20.000 operaciones instrumentadas. |
| `unidadesPorProducto` | Agrupa las unidades por producto. | O(n) promedio | O(p) | Almacena un acumulado por cada producto diferente. | No medida individualmente. |
| `topProductosPorValor` | Ordena los productos por valor y devuelve los primeros. | O(n + p log p) | O(p) | Agrupa productos y ordena las categorías. | No medida individualmente. |
| `ventasDelDia` | Calcula el resumen de ventas de una fecha. | O(n) | O(n) | Utiliza `filter` para crear un arreglo temporal. | No medida individualmente. |
| `clientesRecurrentes` | Encuentra clientes que compraron más de una vez. | O(n²) o hasta O(n³) | O(n) | Compara pares de ventas y utiliza `includes` para buscar clientes repetidos. | Pendiente de medición. |
| `totalCiudadCadena` | Calcula el total de una ciudad con métodos encadenados. | O(n) | O(n) | Crea arreglos intermedios mediante `map` y `filter`. | Pendiente de medición. |
| `totalCiudadUnaPasada` | Calcula el total de una ciudad con un solo ciclo. | O(n) | O(1) | Recorre las ventas y mantiene un acumulador. | Pendiente de medición. |
| `primeraVenta` | Devuelve la primera venta del arreglo. | O(1) | O(1) | Accede directamente a una posición. | 1 operación instrumentada. |
| `generarVentas` | Genera un historial de ventas de tamaño n. | O(n) | O(n) | Construye y almacena n registros. | Genera 10.000 registros. |

**Variables utilizadas:**

- `n`: cantidad de ventas.
- `k`: cantidad de ciudades diferentes.
- `p`: cantidad de productos diferentes.

**Nota sobre clientes recurrentes:** el doble ciclo tiene O(n²) comparaciones. Sin embargo, `includes` también recorre el arreglo de clientes recurrentes. En el peor caso, esa búsqueda puede hacer que el costo llegue a O(n³), por lo que es importante distinguir el análisis simplificado del peor caso real de esta implementación.

---

## 2. Evidencia de mediciones

Las siguientes operaciones corresponden a los contadores instrumentados del proyecto:

| Función | Operaciones con 10.000 ventas |
|---|---:|
| `totalVendidoInstrumentado` | 10.000 |
| `ventaMayorInstrumentada` | 20.000 |
| `totalPorCiudadInstrumentado` | 20.000 |
| `primeraVenta` | 1 |
| `clientesRecurrentes` | Completar con la medición |
| `totalCiudadCadena` | Completar con la medición |
| `totalCiudadUnaPasada` | Completar con la medición |

Los tiempos de ejecución deben registrarse en milisegundos mediante `console.time()` y `console.timeEnd()`. No se deben confundir los contadores de operaciones con el tiempo real de ejecución.

---

## 3. Proyección

Para estimar el comportamiento con 1.000.000 de ventas se toma como referencia el tiempo medido con 10.000 registros.

### Funciones lineales O(n)

Cuando el tamaño de los datos aumenta 100 veces, el trabajo esperado también aumenta aproximadamente 100 veces.

| Función | Tiempo con 10.000 ventas | Proyección con 1.000.000 |
|---|---|---|
| `totalVendido` | Completar | Tiempo × 100 |
| `ventaMayor` | Completar | Tiempo × 100 |
| `totalPorCiudad` | Completar | Tiempo × 100 |
| `totalCiudadCadena` | Completar | Tiempo × 100 |
| `totalCiudadUnaPasada` | Completar | Tiempo × 100 |

### Función cuadrática O(n²)

Para una función cuadrática, multiplicar el tamaño de los datos por 100 puede multiplicar el trabajo por 10.000.

| Función | Tiempo con 10.000 ventas | Proyección con 1.000.000 |
|---|---|---|
| `clientesRecurrentes` | Completar | Tiempo × 10.000 como mínimo de referencia cuadrática |

La proyección es aproximada. La implementación actual de `clientesRecurrentes` también utiliza `includes`, por lo que el crecimiento podría ser superior al cuadrático en el peor caso.

No se debe ejecutar la prueba con un millón de registros sin revisar primero la estimación y los recursos disponibles.

---

## 4. Riesgos

Orden de mayor a menor riesgo:

1. **Clientes recurrentes:** es la función de mayor riesgo porque utiliza ciclos anidados y búsquedas repetidas mediante `includes`. El número de operaciones puede aumentar considerablemente al crecer el historial.
2. **Reportes que crean arreglos intermedios:** `totalCiudadCadena`, `ventasPorCiudadM` y `ventasDelDia` consumen memoria adicional.
3. **Top de productos:** requiere agrupar y ordenar las categorías, por lo que su costo depende también de la cantidad de productos distintos.
4. **Agrupaciones por ciudad y producto:** `totalPorCiudad` y `unidadesPorProducto` almacenan información adicional para cada categoría.
5. **Recorridos lineales:** `totalVendido`, `unidadesVendidas`, `ventaMayor`, `ticketPromedio`, `ventasPorCiudad` y `totalCiudadUnaPasada` recorren los datos una vez.
6. **Funciones constantes:** `primeraVenta` y `valorVenta` realizan una cantidad fija de trabajo.

El criterio de clasificación es el crecimiento del tiempo, el consumo de memoria y la cantidad de trabajo repetido.

---

## 5. Plan de optimización

### Función prioritaria: `clientesRecurrentes`

La implementación actual compara cada venta con las siguientes ventas para identificar si un cliente aparece más de una vez.

**¿Qué trabajo se repite?**

- Se comparan repetidamente los códigos de los clientes.
- Se utiliza `includes` para buscar si un cliente ya está en el arreglo de recurrentes.
- Se vuelven a revisar pares de ventas que podrían haberse contabilizado previamente.

**¿Qué información se podría guardar?**

Se podría utilizar un `Map` u objeto para almacenar el código de cada cliente y la cantidad de compras que realizó.

El procedimiento sería:

1. Recorrer las ventas una sola vez.
2. Registrar cuántas veces aparece cada cliente.
3. Consultar los contadores al terminar.
4. Devolver únicamente los clientes con más de una compra.

La mejora esperada sería una complejidad temporal O(n) promedio y espacial O(c), donde c es la cantidad de clientes distintos.

Esta optimización queda propuesta para una versión futura y todavía no se implementa.

---

## 6. Conclusión

El análisis permite identificar que el motor contiene funciones con diferentes necesidades de tiempo y memoria.

Las funciones que recorren el arreglo una vez tienen crecimiento lineal y son adecuadas para procesar historiales grandes, aunque su tiempo aumenta con la cantidad de registros.

El mayor riesgo está en `clientesRecurrentes`, porque realiza comparaciones repetidas y búsquedas adicionales. Se recomienda optimizar esta función antes de conectar el motor con historiales anuales o grandes volúmenes de ventas.

También se recomienda utilizar `totalCiudadUnaPasada` en lugar de la versión encadenada cuando la memoria del servidor sea limitada.

---


