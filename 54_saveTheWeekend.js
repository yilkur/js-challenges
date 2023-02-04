const podcasts = require('./54_data')

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/

const createDescriptionsFor = data => {
  const newData = []

  for (const podcast of podcasts) {
    const hostsLength = podcast.hosts.length
    let hosts

    if (hostsLength > 2) {
      hosts = podcast.hosts.slice(0, hostsLength - 1).join(', ')
      hosts += ' and ' + podcast.hosts.slice(-1)
    } else if (hostsLength === 2) {
      hosts = podcast.hosts.join(' and ')
    } else {
      hosts = podcast.hosts[0]
    }

    newData.push({
      ...podcast,
      description: `${podcast.title} is a ${podcast.duration} minute ${podcast.genre} podcast hosted by ${hosts}.`,
    })
  }

  return newData
}

console.log(createDescriptionsFor(podcasts))
