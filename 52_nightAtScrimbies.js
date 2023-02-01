const podcasts = require('./52_data')

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/
const awards = ['🏆', '⭐', '💎', '🥇', '👑']

const getRandomIitem = arr => {
  const randIdx = Math.floor(Math.random() * arr.length)
  return arr[randIdx]
}

const getUniqueHosts = data => {
  const uniqueHosts = [...new Set(data.map(entry => [...entry.hosts]).flat())]
  return uniqueHosts
}

const uniqueHosts = getUniqueHosts(podcasts)

const assignAwards = data => {
  return data.map(el => `${getRandomIitem(awards)} ${el}`)
}

console.log(assignAwards(uniqueHosts))
