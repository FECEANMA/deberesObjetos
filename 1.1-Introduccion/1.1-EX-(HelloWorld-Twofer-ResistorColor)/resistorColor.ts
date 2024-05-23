'Resistor Color'

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
export const colorCode = (Color: string) => {
    return COLORS.indexOf(Color)
  }