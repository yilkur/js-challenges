/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game')
const API = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink'

const makeFruitArray = arr => arr.filter(emoji => emoji.group.includes('fruit'))

const getRandomFruits = arr => {
   const generateRandomNum = arrLength => Math.floor(Math.random() * arrLength)
   const randomFruits = []

   for (let i = 0; i < 9; i++) {
      randomFruits.push(arr[generateRandomNum(arr.length)])
   }

   return randomFruits
}

const fetchFood = async () => {
  try {
    const response = await fetch(API)

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    const fruits = makeFruitArray(data)
    const randomFruits = getRandomFruits(fruits)
    console.log(randomFruits)

    randomFruits.forEach(fruit => {
      slotMachine.innerHTML += `
         <li>
            ${fruit.htmlCode}
         </li>
      `
    })

  } catch (error) {
    console.error(`Could not get products: ${error}`)
  }
}

fetchFood()
