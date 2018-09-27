const http = require('http')
const fs = require('fs')

/* We are instanciating a server to render our index.html */
const server = http.createServer((req, res) => {
    console.log(`Request was made on: ${req.url}`)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    let myReadStream = fs.createReadStream(__dirname + '/public/views/index.html', 'utf8')
    myReadStream.pipe(res)

})

const num = 6789;
server.listen(num, '127.0.0.1')

console.log("Running in localhost at port", num);