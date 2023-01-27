/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const findTheWinner = obj => {
  const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1])
  const [winner, votes] = sortedEntries[0]

  return `The winner is ${winner} with ${votes} votes!`
}

module.exports = findTheWinner
