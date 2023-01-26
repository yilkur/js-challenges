const flatten = require('./14_pumpkinPrizes')

test('flattens nested arrays', () => {
  const nestedArray = [
    [39, 99, 76, [39, 99, 76, [39, 99, 76]]],
    89,
    98,
    [87, 56, 90],
    [96, 95],
    40,
    78,
    50,
    [63],
  ]

  const expectedArray = [
    39, 99, 76, 39, 99, 76, 39,
    99, 76, 89, 98, 87, 56, 90,
    96, 95, 40, 78, 50, 63
  ]

  expect(flatten(nestedArray)).toStrictEqual(expectedArray)
})
