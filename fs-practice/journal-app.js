const {readFile, readFileSync, writeFileSync} = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')

console.log(`
type 'past' in order to see past entries \b
type 'over write' at the start your message to wipe clean the journal and enter a new entrie \b
type 'N' to exit
`)

while(true)
{

    let input = readlineSync.question('enter a journal entrie: ')

    if (input.match(/^past$/))
    {
        
        console.log(readFileSync(path.join(__dirname,'/journal.txt'),'utf8'))

    }
    else if(input.match(/^over\swrite/))
    {

        writeFileSync(path.join(__dirname,'/journal.txt'),`entrie:${input.substring(11)} \b`,{flag:'w'})

    }
    else if(input.match(/^N$/))
    {

        break

    }
    else if(input.match(/^empty$/))
    {

        writeFileSync(path.join(__dirname,'/journal.txt'),``,{flag:'a'})

    }
    else
    {

        writeFileSync(path.join(__dirname,'/journal.txt'),`entrie:${input} \* `,{flag:'a'})

    }

}
