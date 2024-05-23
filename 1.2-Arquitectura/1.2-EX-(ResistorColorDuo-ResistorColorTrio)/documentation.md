2. RESISTOR COLOR DUO

'enum ResistoValues' Enumera y se define los valores con los colores asociados, se declara un tipo 'Color' y se agrega un keyof y typeof para obtener las claves de 'ResistoValues'.

Se agrega una funcion: 'function decodedValue([first, second]: Color[]): number {
  return Number(`${ResistorValues[first]}${ResistorValues[second]}`)
}' 

Donde 'decodedValue' toma dos elementos 'first, second' de tipo 'Color'  y devuelve un número que representa el valor de resistencia decodificado.