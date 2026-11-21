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

Corrección: utilizar una condición ternaria: