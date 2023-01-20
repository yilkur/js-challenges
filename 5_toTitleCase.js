/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

const toTitleCase = str =>
  str
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ')

// Test your functions
console.log(toTitleCase('pumpkin pranced purposefully across the pond'))
