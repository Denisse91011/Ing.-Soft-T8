function generar_romanos(num){
  const romanNumerals = [
    { value: 4, numeral: 'IV'},
    { value: 1, numeral: 'I' },
    
    
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