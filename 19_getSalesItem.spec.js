const getSaleItems = require('./19_getSalesItems')
const products = require('./19_data')

test('filter out savory items', () => {
  const expected = [
    { item: '🍭', price: 2.99 },
    { item: '🍫', price: 1.99 },
    { item: '🍬', price: 0.89 },
  ]

  expect(getSaleItems(products)).toStrictEqual(expected)
})
