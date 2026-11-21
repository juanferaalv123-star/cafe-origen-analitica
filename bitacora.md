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