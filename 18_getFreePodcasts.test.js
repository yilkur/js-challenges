const getFreePodcasts = require('./18_getFreePodcasts')
const podcasts = require('./18_data')

test('filters out paid podcasts', () => {
  const expected = [
    { title: 'Scrimba Podcast', rating: 10, paid: false },
    { title: 'Something about Witches', rating: 8, paid: false },
    { title: 'Coding Corner', rating: 9, paid: false },
  ]

  expect(getFreePodcasts(podcasts)).toStrictEqual(expected)
})
