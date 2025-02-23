import generar_romanos from "./romanos";

describe('generar_romanos', () => {
  test('Debe retornar "I" para 1', () => {
    expect(generar_romanos(1)).toBe('I');
  });
})

test('Debe retornar "IV" para 4', () => {
  expect(generar_romanos(4)).toBe('IV');
});