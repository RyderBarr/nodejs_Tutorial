const http = require('http')

const server = http.createServer((req,res)=>{
    // conditional reqdering
    if(req.url === '/')
    {
        res.end('<br>welcome to my really cool home page')
    }
    else if(req.url === '/about')
    {
        res.end('there is not a thing to know about me')
    }
    else
    {
        res.end('404 life not found: Get Good')
    }
})

server.listen(5000,()=>{
    console.log(`listening on http:/localhost:${5000}`)
})
