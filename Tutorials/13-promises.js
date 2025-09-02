/*

A promise in JavaScript is an object that respresents the eventual resualt of an asyncronous operation. it acrs like a place holeder for a value that wil be aviliable now, later, or never 
a promise can be in one of three states:

***pending -> the initial state, operation not completed yet

***Fulfilled (resolved) -> the operation completed successfully and returned a value

***Rejected -> the operation failed and returned a reason (usally a error)

once a Promise is either fulfilled or rejected, it becomes settled and cannot change state again

*/

const myPromise = new promise ((resolve,reject)=>{

    // list of async tasks
    let success = true;

    success?resolve("Task compleed successfully"):reject("something went wrong")

})

// let ip = "127.0.0.6"

const path = require('path')
const {readFile, writeFile} = require('fs')
const { promises } = require('dns')
// const newPromise = new Promise((resolve,reject)=>
// {
    
//     // async operations go here

//     if(ip==="127.0.0.1"||ip==="127.0.0.5")
//     {
//         resolve('success')
//     }
//     else{
//         reject("Failed mission no Respawn")
//     }
    
// })

// console.log(newPromise)

let actualFile = path.join(__dirname, '/content/first.txt')
console.log(actualFile)

// now lets make some finction with promises

function processData(data)
{
    return new Promise((resolve,request)=>{
        setTimeout(() => {
            resolve(data.toUpperCase())
        }, 500)//0.5 sec delay
    })
}

function saveData(data){

    return new Promise((resolve,request)=>{
    
        // save locally or to a cloud
        setTimeout(() => {
            
            resolve(`Data saved: ${data}`)

        }, 500)//0.5 sec delay

    })

}

// usage
function readFilePromise(pathway)
{
    return new Promise((resolve,request)=>{

        readFile(pathway,'utf8', (err, data)=>{

            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }

        })

    })
}

/*
you can handle the outcome using .then(), .catch(), and .finally()

*/
myPromise
    .then(result =>{
        console.log(result)//runs if resolved
    })
    .catch(error =>{
        console.error(error)//runs if rejected
    })
    .finally(()=>{
        console.log("Promise settled")
    })

/* pros of promises

***async proggramming: Promises help manages takes time like network requests or reading files without blocking the rest of the code

***chaining Operations: you can link multiple .then() calls so each one waits for the previous to complete

***Error handiling: .catch() make error handling easier

async function getData(){
    try{
    let response = await fetch(https://api.example.com/data);
    let data = await response.json();
    console.log(data);
    } catch(err) {
        console.error(err)
    }
}
*/
