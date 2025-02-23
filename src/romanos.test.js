import generar_romanos from "./romanos";

describe('generar_romanos', () => {
  test('Debe retornar "I" para 1', () => {
    expect(generar_romanos(1)).toBe('I');
  });
})

test('Debe retornar "IV" para 4', () => {
  expect(generar_romanos(4)).toBe('IV');
});

test('Debe retornar "v" para 5', () => {
  expect(generar_romanos(5)).toBe('V');
});

test('Debe retornar "IX" para 9', () => {
  expect(generar_romanos(9)).toBe('IX');
});