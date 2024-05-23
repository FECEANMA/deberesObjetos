# bob.ts

La función **hey** toma un parámetro **message** de tipo **string** y devuelve una respuesta de tipo **string**. Esta función contiene una serie de declaraciones condicionales **if** que evalúan diferentes condiciones basadas en el contenido del mensaje.

La primera condición **if** verifica si el mensaje es aburrido utilizando la función **hearsBoring**. Si el mensaje es aburrido, es decir, si la longitud del mensaje es cero o si el mensaje consiste solo en espacios en blanco, la función devuelve **'Fine. Be that way!'**.
La segunda condición **if** verifica si el mensaje es tanto "freaky" como inquisitivo utilizando las funciones **hearsFreaky** y **hearsInquisitive**. Si el mensaje cumple ambas condiciones, la función devuelve **'Calm down, I know what I'm doing!'**.
La tercera condición **if** verifica si el mensaje es "freaky" utilizando la función **hearsFreaky**. Si el mensaje es "freaky", es decir, si contiene solo letras mayúsculas, la función devuelve la cadena **'Whoa, chill out!'**.
La cuarta condición **if** verifica si el mensaje es inquisitivo utilizando la función **hearsInquisitive** en el mensaje sin espacios en blanco al final utilizando **trimRight()**. Si el mensaje es inquisitivo, es decir, si termina con un signo de interrogación, la función devuelve la cadena **'Sure.'**.
**Si ninguna de las condiciones anteriores se cumple, la función devuelve la cadena 'Whatever.'**.

Las funciones **hearsBoring, hearsFreaky y hearsInquisitive** son funciones separadas que toman un parámetro **speech** de tipo **string** y devuelven un valor **booleano** basado en diferentes condiciones.

La función **hearsBoring** verifica si el mensaje es aburrido. Devuelve true si la longitud del mensaje es cero o si el mensaje consiste solo en espacios en blanco.
La función **hearsFreaky** verifica si el mensaje es "freaky". Devuelve true si el mensaje contiene solo letras mayúsculas.
La función **hearsInquisitive** verifica si el mensaje es inquisitivo. Devuelve true si el mensaje termina con un signo de interrogación.

# matrix.ts

Se define una clase llamada **"Matrix"** que tiene dos propiedades de solo lectura: **"rows" y "columns"**. La clase también tiene un constructor que recibe un **parámetro de texto tipo string**.

En el constructor, el texto se divide en filas utilizando el carácter de **salto de línea '\n'**. Cada fila se divide nuevamente utilizando una expresión regular para separar los números por espacios en blanco. Los números se convierten en valores numéricos y se almacenan en la matriz **"rows"**.

La matriz **"columns"** se crea a partir de la matriz **"rows"** intercambiando las filas por columnas. Esto se logra utilizando el método **"map"** para iterar sobre los elementos de la primera fila y luego el método **"map"** nuevamente para obtener los elementos correspondientes de cada fila.
