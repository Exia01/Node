const http = require('http')
/* We are importing http from node modules */


/* 
Here we create a server.
A server takes a request -> req and a response -> res
Headers are in the response and the request. 
We can add content type.JSON, HTML. We can also add a status(200, 400 , etc)
 */

/* 
we also implement string literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
*/

const server = http.createServer((req, res) => {
    console.log(`Request was made on: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hi there!') /* This is the plain text. */
});


const num = 6789;
server.listen(num, '127.0.0.1')

console.log("Running in localhost at port ", num);
/* 
Here we are telling the server to listen in that port and the localhost
 */

/* 
We could also do it like this.
  */
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
//   }).listen(1337, '127.0.0.1');
  