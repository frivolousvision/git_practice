const begArray = ['wonderfully brilliant being, ', 'fantastically formulated creature, ', 'sparkling beacon of light, ']
const midArray = ["it's a bit of a cold day, ",  "it's a warm and lovely day, ", "its wet and raining, but that's okay, " ] 
const endArray = ['get out there and make em pay!', 'stay inside and study away!', "take a break, you're making yourself cray!"]

const randomIndexBeg = Math.floor(Math.random() * begArray.length)
const randomIndexMid = Math.floor(Math.random() * midArray.length)
const randomIndexEnd = Math.floor(Math.random() * endArray.length)

console.log(`Greeting, you ${begArray[randomIndexBeg]}${midArray[randomIndexMid]}${endArray[randomIndexEnd]}`)