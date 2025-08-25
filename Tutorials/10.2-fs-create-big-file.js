const {writeFileSync, readFileSync} = require('fs')

// every bit of data is rittn to the end of the file
for(let i=0;i < 200;i++)
{

    writeFileSync('./content/big.txt',`hello Idiot ${i} \n`, {flag:'a'})

}

// every bit of data overwrites the last bit of data