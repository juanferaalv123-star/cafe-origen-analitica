Propiedad	Tipo de dato	Significado
id	        Number	        Identificador único de cada registro de venta.
fecha	    String	        Fecha en la que se realizó la venta.
cliente	    String	        Código que identifica al cliente.
producto	String	        Nombre del producto vendido.
ciudad	    String	        Ciudad donde se encuentra el cliente.
cantidad	Number	        Número de unidades compradas.
precio	    Number	        Precio de una unidad del producto.

Casos borde

1. diferencia en las mayusculas

Problema: en algunos registros aparecen el nombre de ciertos valores en minusculas, mientras que los otros aparecen en mayusculas.

decision: normalizar los nombres de los registros para evitar errores utilizar estos valores

2. Cantidad cero

Problema: el registro numero 8 tiene en cantidad 0 unidades

decision: conservar el registro para mantener la informacion tal cual la original, pero no contar esta venta

3. Clientes repetidos

Problema: Algunos registros contienen clientes repetidos como C01

decision: no eliminar registros (puede haber un posible cambio a futuro) pues un mismo cliente puede realizar varias compras



plan de pseudocodigo

calcular dinero de venta

inicio
    recibir una venta
    multiplicar cantidad por el precio
    devolver el resultado
fin

calcular total de dinero vendido

inicio
    iniciar en 0
    recorrer cada venta
    calcular el valor de la venta
    sumar el resultado tota
    devolver total
fin

calcular total de unidades vendidas

inicio
    iniciar en 0 unidades
    recorrer cada venta
    sumar la cantidad de unidades
    devolver unidades
fin

calcular registro con la mayor venta

inicio
    iniciar ventamayor en null
    iniciar valormayor en 0

    recorrer cada venta
        si el valor es mayor que valormayor actualizar valormayor
        guardar el registro completo
        fin si
    devolver venta mayor
fin


calcular el promedio de dinero vendido

INICIO
    iniciar total en 0
    iniciar contador en 0

    recorrer cada venta
        si cantidad es mayor que 0
            sumar el valor de la venta al total
            aumentar contador en 1
        fin si
    fin recorrer

    si contador es mayor que 0
        dividir total entre contador
    si no
        devolver 0
    fin si 
fin

calcular cuanto dinero se vendio por ciudad

inicio
    iniciar total en 0
    normalizar el nombre de la ciudad

    recorrer cada venta
        normalizar la ciudad de la venta
        si ambas ciudades son iguales
            sumar el valor a la venta total
        fin si
    devolver total
fin



ID	Operación	Total acumulado
1	2 × 42.000	84.000
2	1 × 26.000	110.000
3	1 × 95.000	205.000
4	1 × 42.000	247.000
5	3 × 45.000	382.000
6	2 × 26.000	434.000
7	1 × 120.000	554.000
8	0 × 42.000	554.000
9	2 × 45.000	644.000
10	4 × 42.000	812.000
11	1 × 95.000	907.000
12	3 × 26.000	985.000

ID	Cantidad	Unidades acumuladas
1	2	2
2	1	3
3	1	4
4	1	5
5	3	8
6	2	10
7	1	11
8	0	11
9	2	13
10	4	17
11	1	18
12	3	21


Función totalVendidoM()
- ¿Qué recorro? Todas las ventas del arreglo.
- ¿Qué filtro? No aplico ningún filtro.
- ¿Qué transformo? Calculo el valor de cada venta multiplicando cantidad por precio.
- ¿Qué acumulo? El dinero total vendido.
- ¿Cómo agrupo? No agrupo, solamente sumo todas las ventas.
Función unidadesVendidasM()
- ¿Qué recorro? Todas las ventas.
- ¿Qué filtro? No aplico filtros.
- ¿Qué transformo? No transformo los registros.
- ¿Qué acumulo? La cantidad de unidades vendidas.
- ¿Cómo agrupo? No agrupo, sumo todas las cantidades.
Función ventasPorCiudadM()
- ¿Qué recorro? Todas las ventas.
- ¿Qué filtro? Las ventas que pertenecen a una ciudad específica.
- ¿Qué transformo? Normalizo los nombres de las ciudades.
- ¿Qué acumulo? El dinero vendido en la ciudad seleccionada.
- ¿Cómo agrupo? Reúno las ventas que pertenecen a la misma ciudad.
Función totalPorCiudad()
- ¿Qué recorro? Todas las ventas.
- ¿Qué filtro? No aplico filtros.
- ¿Qué transformo? Normalizo los nombres de las ciudades.
- ¿Qué acumulo? El dinero vendido por ciudad.
- ¿Cómo agrupo? Agrupo las ventas utilizando el nombre de cada ciudad.
Función unidadesPorProducto()
- ¿Qué recorro? Todas las ventas.
- ¿Qué filtro? No aplico filtros.
- ¿Qué transformo? Identifico el producto de cada venta.
- ¿Qué acumulo? Las unidades vendidas de cada producto.
- ¿Cómo agrupo? Agrupo las ventas según el nombre del producto.
Función topProductosPorValor()
- ¿Qué recorro? Todas las ventas.
- ¿Qué filtro? No filtro las ventas inicialmente; al final selecciono los primeros K productos.
- ¿Qué transformo? Convierto los datos agrupados en objetos con producto y total.
- ¿Qué acumulo? El dinero generado por cada producto.
- ¿Cómo agrupo? Agrupo las ventas por producto, ordeno los resultados de mayor a menor y selecciono los primeros K.

Error 1. Bogotá aparecía dos veces

Síntoma: Bogotá aparecía dos veces en el reporte de ventas por ciudad.

Entrada que lo produce:

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

Hipótesis: los nombres de las ciudades se estaban comparando sin eliminar los espacios sobrantes.

Prueba realizada: utilizar trim() para quitar espacios y toLowerCase() para unificar mayúsculas y minúsculas.

Causa: el programa consideraba "Bogotá" y "Bogotá " como dos nombres diferentes.

Corrección: normalizar el nombre antes de utilizarlo como clave de agrupación.

Error 2. Ticket promedio daba NaN

Síntoma: al consultar una fecha sin ventas, el ticket promedio mostraba NaN.

Entrada que lo produce:

const ventasDia = [];

const promedio = ventasDia.reduce(
    (total, venta) => total + valorVenta(venta),
    0
) / ventasDia.length;

console.log(promedio);

Hipótesis: el programa estaba dividiendo entre cero porque el arreglo no tenía registros.

Prueba realizada: ejecutar la función ventasDelDia() con una fecha que no aparece en los datos.

Causa: el programa no verificaba si existían ventas válidas antes de dividir.

Corrección: utilizar una condición ternaria


### Predicción del crecimiento de operaciones

Antes de realizar las pruebas, considero que `totalVendido`, `ventaMayor` y `totalPorCiudad` tendrán un crecimiento lineal, porque necesitan recorrer todos los elementos del arreglo para completar su trabajo.

Por lo tanto, si la cantidad de ventas se multiplica por 10, espero que sus operaciones también aumenten aproximadamente 10 veces.

En cambio, `primeraVenta` tendrá un crecimiento constante, porque solamente consulta la primera posición del arreglo, sin importar cuántos registros existan. Por eso, si los datos se multiplican por 10, sus operaciones deberían mantenerse iguales.

Mi predicción es que las tres funciones que recorren el arreglo serán O(n), mientras que `primeraVenta` será O(1). No espero encontrar una función O(n²) en esta prueba.

### Comparación de predicciones y resultados

Al comparar mi predicción con los resultados obtenidos, puedo observar que se cumple el crecimiento esperado.

Cuando las ventas pasan de 100 a 1.000, las operaciones de `totalVendido`, `ventaMayor` y `totalPorCiudad` aumentan aproximadamente 10 veces. Lo mismo sucede cuando se pasa de 1.000 a 10.000 y de 10.000 a 100.000 registros.

Por otro lado, `primeraVenta` mantiene una operación en todos los tamaños, demostrando que su trabajo no depende de la cantidad de registros.

### Conclusión

Las pruebas demuestran que no todas las funciones trabajan de la misma manera cuando aumenta la información. Las funciones que recorren el arreglo tienen complejidad lineal O(n), mientras que la función que accede directamente a la primera posición tiene complejidad constante O(1).

Esto permite identificar qué funciones aumentan su trabajo al crecer los datos y estimar cómo se comportará el motor de análisis cuando tenga historiales mucho más grandes.

!recurrentes.includes(ventas[i].cliente)


includes() busca el cliente dentro del arreglo recurrentes. Si hay muchos clientes recurrentes, esa búsqueda puede revisar muchos elementos.

Esto significa que no basta con contar los dos ciclos: también debemos contar las búsquedas internas.
- Los ciclos anidados realizan \(n(n-1)/2\) comparaciones entre ventas.
- includes() puede costar hasta O(r), donde r es el número de clientes recurrentes que ya se han guardado.
- Si r crece con n, el costo adicional puede llegar a ser importante.
En el peor caso, el costo total puede alcanzar O(n³), porque se pueden hacer O(n²) comprobaciones de coincidencia y cada llamada a includes() puede recorrer hasta O(n) elementos. En escenarios habituales, el crecimiento puede estar más cerca de O(n²), pero depende de cómo se distribuyan los clientes.

Este detalle es importante: la complejidad no se determina solamente mirando cuántos ciclos hay, sino también qué operaciones se ejecutan dentro de ellos.


### Diagnóstico de clientes recurrentes

**Problema identificado:**

La función `clientesRecurrentes` funciona correctamente con los 12 registros iniciales, pero presenta problemas de rendimiento cuando aumenta la cantidad de ventas.

**Traza:**

Con un arreglo de 5 ventas, los ciclos realizan 10 comparaciones entre clientes. La fórmula general es:

C(n) = n(n - 1) / 2.

Esto demuestra que el número de comparaciones crece de manera cuadrática.

**Medición del tiempo:**

Se realizaron pruebas con 1.000, 2.000, 4.000, 8.000 y 16.000 ventas. Los tiempos se registraron utilizando `console.time()` y `console.timeEnd()`.

| Ventas | Tiempo |
|---:|---:|
| 1.000 | Completar |
| 2.000 | Completar |
| 4.000 | Completar |
| 8.000 | Completar |
| 16.000 | Completar |

**Análisis:**

Cuando se duplica la cantidad de ventas, el número de comparaciones entre pares se multiplica aproximadamente por cuatro. Esto corresponde al comportamiento de una función O(n²).

También se identificó un costo adicional en `recurrentes.includes()`, ya que realiza búsquedas dentro de otro arreglo. En el peor caso, esta búsqueda puede hacer que el costo total llegue a O(n³).

**Estimación:**

A partir del tiempo medido con 16.000 ventas, se estimó el tiempo necesario para procesar 100.000 y 1.000.000 de ventas. La estimación se realizó suponiendo un crecimiento cuadrático y teniendo en cuenta que el costo adicional de `includes()` puede modificar el resultado.

**Conclusión:**

La función cumple su objetivo, pero no está preparada para procesar historiales muy grandes de manera eficiente. Su forma de comparar las ventas genera demasiado trabajo y las búsquedas adicionales aumentan el costo. Por eso es necesario mejorar su implementación antes de utilizarla con historiales anuales.

El reporte de clientes recurrentes se demora porque compara las ventas entre sí para descubrir cuáles pertenecen a un mismo cliente. Cuando hay pocas ventas, el proceso es rápido, pero cuando el historial crece, la cantidad de comparaciones aumenta considerablemente.

Además, cada vez que encuentra un cliente repetido, realiza otra búsqueda para comprobar si ya lo había registrado.

Esto provoca que el reporte tarde cada vez más en entregar los resultados. Recomendamos mejorar la forma en que se organizan y consultan los clientes para que el sistema pueda procesar grandes historiales sin demoras excesivas.

El reporte de clientes recurrentes se demora porque compara las ventas entre sí para descubrir cuáles pertenecen a un mismo cliente. Cuando hay pocas ventas, el proceso es rápido, pero cuando el historial crece, la cantidad de comparaciones aumenta considerablemente.

Además, cada vez que encuentra un cliente repetido, realiza otra búsqueda para comprobar si ya lo había registrado.

Esto provoca que el reporte tarde cada vez más en entregar los resultados. Recomendamos mejorar la forma en que se organizan y consultan los clientes para que el sistema pueda procesar grandes historiales sin demoras excesivas.



El reporte de clientes recurrentes se demora porque compara las ventas entre sí para descubrir cuáles pertenecen a un mismo cliente. Cuando hay pocas ventas, el proceso es rápido, pero cuando el historial crece, la cantidad de comparaciones aumenta considerablemente.

Además, cada vez que encuentra un cliente repetido, realiza otra búsqueda para comprobar si ya lo había registrado.

Esto provoca que el reporte tarde cada vez más en entregar los resultados. Recomendamos mejorar la forma en que se organizan y consultan los clientes para que el sistema pueda procesar grandes historiales sin demoras excesivas.

Característica	totalCiudadCadena	totalCiudadUnaPasada
Etapas de recorrido	4	1
Recorridos sobre todas las ventas	2	1
Recorridos sobre las ventas filtradas	Hasta 2	0
Arreglos intermedios	3	0
Complejidad temporal	O(n)	O(n)
Complejidad espacial adicional	O(n)	O(1)

¿Por qué ambas son O(n) si una recorre el arreglo cuatro veces?

Porque en Big O se eliminan las constantes. Si una función realiza cuatro recorridos proporcionales a n, su crecimiento sigue siendo lineal. Por ejemplo:
\[
4n \rightarrow O(n)
\]

La diferencia está en que la versión encadenada hace más trabajo constante y reserva más memoria, aunque las dos tengan el mismo orden de crecimiento temporal.


Complejidad espacial de las funciones del motor
La complejidad espacial mide cuánta memoria adicional necesita una función cuando aumenta la cantidad de datos.
Función	Espacio adicional	Motivo
valorVenta	O(1)	Solo calcula y devuelve un número.
totalVendido	O(1)	Mantiene un acumulador.
unidadesVendidas	O(1)	Mantiene un acumulador.
ventaMayor	O(1)	Guarda una referencia al mayor registro.
ticketPromedio	O(1)	Usa total y contador.
ventasPorCiudad	O(1)	Usa un acumulador.
totalVendidoM	O(1)	reduce acumula un número.
unidadesVendidasM	O(1)	reduce acumula un número.
ventasPorCiudadM	O(n)	filter crea un arreglo nuevo.
totalPorCiudad	O(k)	Crea un grupo por cada ciudad diferente.
unidadesPorProducto	O(p)	Crea una propiedad por producto diferente.
topProductosPorValor	O(p)	Crea un objeto, entradas, resultados ordenados y un top.
ventasDelDia	O(n)	filter crea arreglos de resultados.
totalCiudadCadena	O(n)	Crea tres arreglos intermedios.
totalCiudadUnaPasada	O(1)	Solo utiliza variables acumuladoras.
generarVentas	O(n)	Construye un arreglo de n ventas.
clientesRecurrentes	O(n)	Almacena los clientes recurrentes.

### Análisis de complejidad espacial: reporte por ciudad

**Comparación de las dos versiones**

La función `totalCiudadCadena` utiliza cuatro métodos: `map`, `filter`, `map` y `reduce`. Aunque el código es fácil de leer, crea tres arreglos intermedios durante el procesamiento. Esto aumenta el consumo de memoria cuando el historial de ventas crece.

La función `totalCiudadUnaPasada` utiliza un solo ciclo `for...of`. En cada iteración normaliza la ciudad, comprueba si coincide y suma el valor de la venta. No necesita crear arreglos adicionales.

**Complejidad temporal**

Las dos funciones tienen complejidad O(n), porque procesan una cantidad de elementos proporcional al tamaño del arreglo. Aunque la versión encadenada realiza cuatro etapas, las constantes se eliminan al expresar la complejidad Big O.

**Complejidad espacial**

La versión encadenada tiene complejidad O(n), porque crea arreglos intermedios cuyo tamaño depende de la cantidad de ventas.

La versión de una pasada tiene complejidad O(1), porque solamente utiliza variables para almacenar la ciudad buscada y el total acumulado.

**Decisión técnica**

Decidí conservar `totalCiudadUnaPasada` en el motor principal. Aunque la versión encadenada puede resultar más sencilla de leer, la versión de una pasada consume menos memoria y evita crear estructuras temporales.

Esta decisión es importante porque el marketplace trabajará con historiales grandes y tendrá recursos de servidor limitados. Por eso, prefiero reducir las asignaciones de memoria sin cambiar el resultado de la operación.

### Conclusión

La complejidad temporal no es el único aspecto que debemos analizar al desarrollar un programa. También debemos tener en cuenta la memoria que necesita para trabajar.

Dos funciones pueden tener la misma complejidad temporal O(n), pero consumir cantidades diferentes de memoria. En este caso, la versión de una pasada es más conveniente porque realiza el cálculo directamente y evita crear arreglos innecesarios.

