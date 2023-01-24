const removeDupeChars = require('./11_removeDupeChars')

test('removes duplicates in strings', () => {
  expect(removeDupeChars('aabbccb1212')).toBe('abc12')
  expect(removeDupeChars('9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23')).toBe('938dsabj2fcgq')
})