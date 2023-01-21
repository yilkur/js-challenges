const cap = require('./1_cap')

test('capitalizes string', () => {
  expect(cap('hello')).toBe('HELLO')
  expect(cap('HeLlO')).toBe('HELLO')
})
