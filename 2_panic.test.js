const panic = require('./2_panic')

test('turns string to panic string', () => {
  expect(panic("I'm almost out of coffee")).toBe(
    "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
  )
  expect(panic('Hello')).toBe('HELLO!')
  expect(panic('winter is coming')).toBe('WINTER 😱 IS 😱 COMING!')
})
