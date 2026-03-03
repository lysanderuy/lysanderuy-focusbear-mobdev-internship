const sum = require('./sum');

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('returns undefined for non-numeric input', () => {
    expect(sum('a', 3)).toBeUndefined();
  });
});

