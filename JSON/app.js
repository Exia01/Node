const http = require('http')
const fs = require('fs')

/* We are instanciating a server to render our index.html */
const server = http.createServer((req, res) => {
    console.log(`Request was made on: ${req.url}`)
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    /* We just told the server to create a json response with a 200 status code. */

    /* Here we are creating a dictionary --> We can also do fs and read a file from a different directory */
    let myObj = {
        name: 'Ryu',
        job: 'Playable Character',
        age: 29
    }
    /* We can't just send the object in a response. We need to turn it into a string.
    .end() expects a string or a Buffer */
    res.end(JSON.stringify(myObj))
})

const num = 6789;
server.listen(num, '127.0.0.1')

console.log("Running in localhost at port", num);