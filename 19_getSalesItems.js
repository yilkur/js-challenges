const products = require('./19_data')

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

const getSaleItems = data =>
  data
    .filter(item => item.type === 'sweet')
    .map(sweet => ({
      item: sweet.item,
      price: sweet.price,
    }))

module.exports = getSaleItems
