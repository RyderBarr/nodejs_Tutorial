// started operating system process
console.log('first')

setTimeout(() => {
    console.log('second')
}, 0);

console.log('third')

// things to keep in mind
// you have ended operating system process
// to avoid infinite loops use clearTimeout()

