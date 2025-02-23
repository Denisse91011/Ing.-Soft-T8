function generar_romanos(num){
  const romanNumerals = [
    { value: 50, numeral: 'L'},
    { value: 40, numeral: 'XL'},
    { value: 10, numeral: 'X'},
    { value: 9, numeral: 'IX'},
    { value: 5, numeral: 'V'},
    { value: 4, numeral: 'IV'},
    { value: 1, numeral: 'I' }
    
  ]

  let result = '';

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

export default generar_romanos