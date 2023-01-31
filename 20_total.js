const shoppingCart = require('./20_data')

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

const total = arr =>
  Math.round(arr.reduce((acc, item) => acc + item.price, 0) * 100) / 100

console.log(total(shoppingCart))
