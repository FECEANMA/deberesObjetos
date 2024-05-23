# Darts
La función **score** toma dos parámetros numéricos **x** y **y**, que representan las coordenadas de un punto en un plano. Luego, calcula la distancia entre el punto **(x, y)** y el origen **(0, 0)** utilizando la fórmula **Math.sqrt(x ** 2 + y ** 2)**. La función **Math.sqrt()** se utiliza para calcular la raíz cuadrada de la suma de los cuadrados de **x** y **y** 

La función **score** utiliza una serie de declaraciones **if** y **else**, **if** para asignar una puntuación basada en la distancia calculada. Si la distancia es menor o igual a 1, la puntuación es 10. Si la distancia está entre 1 y 5 (inclusive), la puntuación es 5. Si la distancia está entre 5 y 10 (inclusive), la puntuación es 1. Si la distancia es mayor que 10, la puntuación es 0.

# Pangram

La función **isPangram** toma una cadena de texto **s** como argumento y devuelve un valor **booleano**.
El método **every** de JavaScript para iterar sobre cada letra del alfabeto en minúscula.
Para cada letra, se verifica si está presente en la cadena de texto convertida a minúsculas utilizando el método **includes**.
Si todas las letras del alfabeto están presentes en la cadena de texto, la función devuelve **true**, lo que indica que la cadena de texto es un pangram. De lo contrario, devuelve **false**.