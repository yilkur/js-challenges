const countChars = require('./12_countChars')

test('removes duplicates in strings', () => {
  expect(countChars('Peggy Porth')).toStrictEqual({p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1})
  expect(countChars('JAmes')).toStrictEqual({j: 1, a: 1, m: 1, e: 1, s: 1})
})