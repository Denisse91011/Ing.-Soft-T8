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

test('Debe retornar "X" para 10', () => {
  expect(generar_romanos(10)).toBe('X');
});

test('Debe retornar "XL" para 40', () => {
  expect(generar_romanos(40)).toBe('XL');
});

test('Debe retornar "L" para 50', () => {
  expect(generar_romanos(50)).toBe('L');
});

test('Debe retornar "XC" para 90', () => {
  expect(generar_romanos(90)).toBe('XC');
});

test('Debe retornar "C" para 100', () => {
  expect(generar_romanos(100)).toBe('C');
});

test('Debe retornar "CD" para 400', () => {
  expect(generar_romanos(400)).toBe('CD');
});

test('Debe retornar "D" para 500', () => {
  expect(generar_romanos(500)).toBe('D');
});

test('Debe retornar "CM" para 900', () => {
  expect(generar_romanos(900)).toBe('CM');
});

test('Debe retornar "M" para 1000', () => {
  expect(generar_romanos(1000)).toBe('M');
});

