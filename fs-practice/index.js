const {readFile, readFileSync,writeFile, writeFileSync} = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')

// async - distrupts the code to read the file
// sync - reads the file in the background


// part two
// readFile('./notes.txt', 'utf8', (err,notes)=>{

//     if(err){console.log(err);return}

//     const result = `the notes: ${notes}`

//     console.log('File read successfully')
    
// })

// const syncNotes = readFileSync(path.join(__dirname,'/notes.txt'),'utf8')

// console.log(syncNotes)

// suprizingly the sync was loged first even though it happend after 
// this makes me think that fileRead takes some time and because of that it lets the other code go past it will it is reading the file

// part three 
// writeFileSync(path.join(__dirname,'/notes.txt'),'Written with fs.writeFileSync (synchronous).',{flag:'a'})

// part four
// flag a appends text to the file
// writeFile('./content/result-mind-grenade.txt','appended with flag a',{flag:'a'}, (err)=>
// {

//     if(err){console.log(err);return}

//     console.log('Asynchronous write completed')
            
// })

// flag w overwrites any text in the file
// writeFile('./content/result-mind-grenade.txt','overwriten with flag w',{flag:'w'}, (err)=>
// {

//     if(err){console.log(err);return}

//     console.log('Asynchronous write completed')
            
// })

// flag wx writes only to a file that doesn't exist yet
// writeFile('./content/result-mind-grenade.txt','this will error',{flag:'wx'}, (err)=>
// {

//     if(err){console.log(err);return}

//     console.log('Asynchronous write completed')
            
// })

// flag r just reads
// readFile('./notes.txt', 'utf8', {flag:'r'}, (err,notes)=>{

//     if(err){console.log(err);return}

//     console.log('File read successfully')
    
// })


// jurnoul below

console.log(`
    type 'past' in order to see past entries \b
    type 'over write' at the start your message to wipe clean the journal and enter a new entrie \b
    type 'E' to exit \b
    type 'empty' to empty all the eintries without adding a new one
    `)
    
// can add multiple entries without having to restart the program
let i = 0;
while(true)
{
    i++
    // user console commands
    // if()
    // {

    // }

    // getting the user input
    let input = readlineSync.question(`enter a journal entrie: `)

    // for command past
    if (input.match(/^past$/))
    {
        
        console.log(readFileSync(path.join(__dirname,'/journal.txt'),'utf8'))

    }
    // for command overwrite
    else if(input.match(/^over\swrite/))
    {
        i = 1;
        writeFileSync(path.join(__dirname,'/journal.txt'),`entrie${i}:${input.substring(11)} \b`,{flag:'w'})

    }
    // for command E
    else if(input.match(/^E$/))
    {

        break

    }
    // for command empty
    else if(input.match(/^empty$/))
    {

        i=0;
        writeFileSync(path.join(__dirname,'/journal.txt'),``,{flag:'w'})

    }
    // writes the text if no command
    else
    {

        writeFileSync(path.join(__dirname,'/journal.txt'),`entrie${i}:${input} \* `,{flag:'a'})

    }

}
