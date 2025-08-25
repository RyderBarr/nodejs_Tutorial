const os = require('os')

// information about the current users devise
const user = os.userInfo()

console.log(user)

// method return the system uptime in seconds
function convertTime(seconds)
{
    const hours = Math.floor(seconds/3600)
    const minutes = Math.floor((seconds%3600)/60)
    const secs = Math.floor(seconds%60)
    return `Hours:${hours} Min:${minutes} Sec:${secs}`
}

console.log(convertTime(os.uptime()))

// Convert to hours min and second

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
    device:os.platform(), //OS: win-32, liux, macosx
    arch:os.arch(), //Architecture: x64,x86,arm4 .. etc
}

console.log(currentOS)