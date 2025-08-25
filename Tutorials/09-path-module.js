const path = require('path')

console.log(path.sep)//seperatior

const filePath = path.join('/content','subfolder','test.txt')
console.log(__dirname)
console.log(filePath)

const bast = path.basename(filePath)
console.log(bast)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)