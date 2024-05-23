# Space-age.ts

interface Planets {
    [key: string]: number
}

Se define una interfaz llamada **Planets**. Permite que los objetos de esta interfaz tengan propiedades con cualquier clave de cadena y un valor de tipo correspondiente **number**


const RATIOS: Planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

Declara una variable constante llamada **RATIOS** y le asigna un objeto. El objeto representa las proporciones de los períodos orbitales de los planetas en comparación con el período orbital de la Tierra. Cada planeta es una clave en el objeto y su valor correspondiente es la proporción. El **Planets** La interfaz se utiliza para especificar el tipo de **RATIOS** objeto.


export function age(planet: string, seconds: number): number {
    return Number((seconds / 31557600 / RATIOS[planet]).toFixed(2))
}

Define una función llamada **age** **planet** (tipo string) y **seconds** (tipo número). La función calcula la edad del planeta.**RATIOS** objeto para determinar la proporción para el planeta especificado. El **toFixed** método para redondear numeros. Finalmente, el resultado se convierte en un número usando el comando **Number**.


# D&D-CHARACTER.ts

**hitpoints:** Representa los puntos de vida del personaje, que miden su salud física y vitalidad.
**strength, dexterity, constitution, intelligence, wisdom, charisma:**
 Representa las puntuaciones de habilidad del personaje en diferentes atributos.


El constructor inicializa las propiedades de la clase **DnDCharacter**.
Llama al **generateAbilityScore()** método para generar puntuaciones de habilidad aleatorias para cada atributo.
Calcula los puntos de vida del personaje sumando 10 al modificador de la puntuación de capacidad de constitución utilizando el metodo **getModifierFor()**.


**generateAbilityScore():** Método estático que devuelve un valor fijo de 4. Este método se utiliza para generar puntuaciones de habilidad aleatorias para los atributos del personaje.
**getModifierFor(abilityValue: number):** Un método estático que calcula el modificador para un valor de habilidad determinado. Utiliza una fórmula para calcular el modificador en función del valor de la habilidad.

