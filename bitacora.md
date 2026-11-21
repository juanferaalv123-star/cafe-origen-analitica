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