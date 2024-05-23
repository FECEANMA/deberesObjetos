1. 
'Hello, World!'

export function hello(): string {
  return 'Hello, World!';
}

La palbra export se utiliza para hacer que la función sea accesible desde otro archivo 
Se define una funcion llamada hello en el cual no acepta ningún argumento y devuelve un valor tipo string
Return para que devuelva hello world

2. 

Two Fer

export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me.`;
}

Define una funcion llamada twofer en el cual se introduce un argumento tipo string llamado name, si no se introduce un nombre se utiliza un valor predeterminado que seria you. Esta función devuelve un string
Por ultimo return devuelve la frase con el name que sea introducido

3. 

RESISTOR COLOR

'export' hace que 'COLORS' sea accesible fuera del modulo.
Se define una variable constante llamada 'COLORS' y dentro se agrega una coleccion de datos 'negro, marrón, rojo, naranja, amarillo, verde, azul, violeta, gris, blanco'.

La segunda linea se define una constante 'colorCode' con parametro 'Color' de tipo string, y en la tercera linea regresa el valor de indice 'indexof' de 'COLORS' dependiendo que valor se introdujo en el parametro 'Color'





Link del video: https://youtu.be/UNoySDZ3Tis