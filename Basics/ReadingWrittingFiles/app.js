const fs = require('fs');

/* These a synchronous method. 
Meaning is it a blocking Code.
It will not move on to the next line until it is done reading the file. 
When we read it it will be on binary data. We need to encode it. */

// let readMe = fs.readFileSync('readMe.txt', 'utf8')

// /* This is another Synchronous function. It takes the variable readMe and writes a new file from it.  */

// fs.writeFileSync('writeMe.txt', readMe)

/////////////
/* These are the ---Asynchronous---
Methods Since they async we need to have a callback function fire when the process is complete
 */

let print = () => {
    console.log('File deleted')
}
fs.mkdir("temp", (param) => {
    fs.readFile('./readMe.txt', 'utf8', (err,data)=> {
        if(err)
            throw err;
        else{
            fs.writeFile('./temp/writeMe.txt', data, (err)=>{
                if(err)
                    throw err;
                else
                    console.log("Data Saved");
            });
        }
    });
    /*  say we wanted to delete the text we just file we just read we could do something like this */
    fs.unlinkSync('readMe.txt', print())
});
/* The benefit of this is that even though the console.log is after. 
It will log first while the file loads.  */
console.log('test');


/* Mkdir is short for make directory
rmdir is for removing that directory 
sync is short for synchronous and it is code blocking. */
// fs.mkdirSync("temp", (param) => {})
// fs.rmdirSync('./temp', (param) => {})
