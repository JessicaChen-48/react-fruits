import {items} from "./foods.js"
import {choice, remove} from "./helpers.js"

let randomFruit = choice(items);
console.log(`I'd like one ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}!`)
console.log(`Delicious! May I have another?`)
remove(items, randomFruit);
console.log(`I'm sorry, we're all out. We have ${items.length} left`)
