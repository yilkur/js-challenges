const shoppingCart = require('./21_data')

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

const totalSavory = arr =>
  arr.reduce((acc, item) => {
    if (item.type === 'savory') {
     return acc + item.price
    } return acc
  }, 0)

console.log(totalSavory(shoppingCart))
