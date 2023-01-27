const findTheWinner = require('./16_findTheWinner')

test('finds the winner with most votes', () => {
  const votes = {
    '🍕 pizza': 3,
    '🌮 tacos': 10,
    '🥗 salads': 7,
    '🍝 pasta': 5,
  }

  const expected = 'The winner is 🌮 tacos with 10 votes!'

  expect(findTheWinner(votes)).toBe(expected)
})
