/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

const API =
  'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature'
const flowerBed = document.querySelector('.emoji-flower-bed')

const clearTheGarden = arr => arr.filter(item => item.group === 'animal mammal')

const fetchData = async apiUrl => {
  const response = await fetch(apiUrl)
  const data = await response.json()
  const animalsOnly = clearTheGarden(data)

  animalsOnly.forEach(animal => {
    flowerBed.innerHTML += `
        <li>
            ${animal.htmlCode[0]}
        </li>
    
    `
  })
}

fetchData(API)
