const {readFileSync, writeFileSync} = require('fs')

const path = require('path')

console.log('Winter Is Here')

/*
Synchronous(fs.readFileSync amd fs.writeFileSync..ect)
is consiering a blocking event
Block the event loop until the operattion finihes
NO other code runs during that time
Simpletrto write but can freeze the server is the file is large or the disk is low

perfornance: Slow when handling many requests becase each operation halts all code execution
Uses: Best of one of programs like utilites or back-ups, or large database changes
*/

const first = readFileSync(path.join(__dirname,'/content/first.txt'),'utf-8')
const second = readFileSync(path.join(__dirname,'/content/second.txt'),'utf-8')
const third = readFileSync(path.join(__dirname,'/content/third.txt'),'utf-8')

console.log(first,second,third)
/*charset options:
ascii
base64
base64url (node v14+)
hex
usc2/usc-2/utf16le/utf-16le
utf8/utf-8
binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)
*/

writeFileSync(path.join(__dirname,'/content/Yu-Gi-Oh.txt'),`here is the result:
${first}${second}${third}`,{ flag:'a'})

/*

w(default): Opens the file for writing. If the file does not exist it is created. If the file exits, its contents are overwriten bedire new dat is written

wx: simular to w but if fails to error if the path exists. This ensures that a new file is created without verwriting the existing one

a: Opens the file for appending. if the file does not exist it is created. If the ifle exists the dada is appended to end the existing content

ax: Simular to a but it fails if the path exists. this ensures that data is only appended to a filr if it is newly created

w+: opens the file for reafing and writing .if gne file does not exist it is created. if the file exists. the new data is appened to the end of its existing content



rs+: opens the file for reading and writing synchronously. This flag sould be used with caution as it can block nodejs event loop

*/