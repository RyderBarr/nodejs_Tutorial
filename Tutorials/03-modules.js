// commonJS, every file is a module (by default)
// modules - encapsulated code (only share the minimum amount of info, properties, and methods)

const name = require('./04-name')
const message = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

console.log(name.Shakira)
console.log(name.Pitbull)

// doesn't work
// message.wakeUpMessage('ryder')

console.log(data.items[1])
console.log(data.marriedPerson)
