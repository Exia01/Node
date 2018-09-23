const http = require('http')
const fs = require('fs')
let ninjas = require('./public/assets/files/ninjas') //importing the file

let newNinjas = ninjas.ninjasDic // calling the dictionary

/* We are instanciating a server to render our index.html */
const server = http.createServer((req, res) => {
    console.log(`Request was made on: ${req.url}`)
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/public/views/index.html', errors => {
            if (errors) {
                console.log(errors)
            }
        }).pipe(res);
    }
    
    else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/public/views/contact.html', errors => {
            if (errors) {
                console.log(errors)
            }
        }).pipe(res);
    }
    
    else if (req.url === '/api/ninjas') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(newNinjas));
    }
    
    else if (req.url === '/assets/style.css') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        });
        fs.createReadStream(__dirname + '/public/assets/style.css', errors => {
            if (errors) {
                console.log(errors)
            }
        }).pipe(res);
    }
    // request didn't match anything:
    else {
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/public/views/404.html', errors => {
            if (errors) {
                console.log(errors)
            }
        }).pipe(res);
    }

})

const num = 6789;
server.listen(num, '127.0.0.1')

console.log("Running in localhost at port", num);