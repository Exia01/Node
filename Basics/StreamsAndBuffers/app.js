/* Streams are objects in node js.
Can create streams to transfer Data 
Increases performance
There are  Writeable, Readable and Duplex(both read and write)
*/

const http = require('http')
const fs = require('fs')
/* This ReadableStream inherits from the EventEmitter */
// let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')

/* This Writeable streanms inherits from the EventEmitter
We don't need the utf8 encoding though */
// let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt') 

/* This readstream listen to an event, which takes in a callback as a 'chunk' a chunk is data that has been buffered --> we then console.log */
// myReadStream.on('data', (chunk) => {
//     console.log('New chunk recieved')
//     myWriteStream.write(chunk)
//    /*  the difference is that we are splitting the Data
//     the fs write is slower than a stream */
//     // console.log(chunk)
// })

/* There is a faster way of doing this which are pipes
This automatically handles the read and write Streams
We can't do it from write to write.
*/

 const server = http.createServer((req, res) => {
    // console.log(`Request was made on: ${req.url}`)
     res.writeHead(200, {'Content-Type': 'text/plain'})
    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
    myReadStream.pipe(res) /* We are now sending the contents of the pipe */
});

const num = 6789;
server.listen(num, '127.0.0.1')

console.log("Running in localhost at port", num);