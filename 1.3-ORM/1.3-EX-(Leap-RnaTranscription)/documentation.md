# leap.ts

**export function isLeap(year: number): boolean**
Esta línea declara una función denominada **isLeap** que toma un parámetro **year** de tipo **number**.
La export palabra clave indica que se puede acceder a esta función desde otros módulos.

**(year % 4 === 0 ) && (year % 100 !== 0 || year % 400 === 0)**
Esta línea contiene la condición para determinar si el año dado es bisiesto.
El **%** calcula el resto cuando **year** se divide por el número especificado.
**(year % 4 === 0)** comprueba si el año es divisible por 4 sin resto.
**(year % 100 !== 0)** comprueba si el año no es divisible por 100 sin resto.
**(year % 400 === 0)** comprueba si el año es divisible por 400 sin resto.
Los operadores **&&** y **||** son operadores lógicos que se utilizan para combinar múltiples condiciones.
La condición **(year % 4 === 0 ) && (year % 100 !== 0 || year % 400 === 0)** evalúa true si el año es bisiesto y falseen caso contrario.

# rna-transcription

interface M {
    [key: string]: string
}

Define una interfaz llamada **M**. La interfaz tiene una propiedad con un índice de cadena, lo que significa que puede tener cualquier cantidad de propiedades de tipo cadena. Esto permite que la interfaz represente un mapeo de cadenas a cadenas.


const Map: M = { 
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

Se declara una variable constante nombrada **Map** y le asigna un objeto que implementa la **M** interfaz. El objeto representa un mapeo de nucleótidos de ADN a nucleótidos de ARN. Por ejemplo, el nucleótido 'G' del ADN está asignado al nucleótido 'C' del ARN.


export function toRna(dna: string): string 

Se declara una función denominada **toRna** que toma un parámetro **dna** de tipo cadena y devuelve una cadena. La función también está marcada con la **export** palabra clave, lo que significa que se puede acceder a ella desde fuera del módulo.


if(/[^ACGT]/.test(dna)) {
    throw 'Invalid input DNA.'
}

Comprueba si la entrada **dna** contiene caracteres distintos de 'A', 'C', 'G' o 'T'. Utiliza una expresión regular **/[^ACGT]/** para hacer coincidir cualquier carácter que no sea 'A', 'C', 'G' o 'T'. Si se encuentra dicho carácter, se genera un error con el mensaje "ADN de entrada no válida".


return dna.replace(/[ATCG]/g, m => Map[m])

Se utiliza el **replace** método de la **dna** cadena para reemplazar cada aparición de un nucleótido de ADN ('A', 'T', 'C' o 'G') con su correspondiente nucleótido de ARN. Utiliza una expresión regular **/[ATCG]/g** para hacer coincidir todas las apariciones de nucleótidos de ADN en la cadena. El reemplazo se realiza mediante una función de flecha **m => Map[m]**, que busca el nucleótido de ARN en el **Map** objeto basándose en el nucleótido de ADN coincidente.