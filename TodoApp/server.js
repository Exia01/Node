const express = require('express') /*  imports express as a function */
const path = require("path");

const app = express();
/* This enables it to use it-- > fire the function */
const port = 8000
/* We are setting the  views/static directory  */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views')); 
/* This enables us to do static content */
app.use(express.static(path.join(__dirname, "/public/static/css")))
const bodyParser = require('body-parser')
/* This is a middleware it enables passing of data */
app.use(bodyParser.urlencoded({ extended: true }))



/* Could be done like this */
// app.use(express.static("static"))

/* 'get' routes */
/* route parameters--> req.params.id */
app.get('/profile/:name', (req, res) => {
    let data = {age:28, job:'Ninja', hobbies:['fishing', 'reading']}
    res.render('profile', {person: req.params.name, data: data})
})

app.get('/contact', (req, res) => {
    // console.log('This is from from the contact req: ' + req)
    // console.log(req.query)
    /* we are pasing the query string to the contact page */
    res.render('contact',{ qs:req.query})
})

app.get('/', (req, res) => {
    res.render('index')
})



/* 'post' routes */

app.post('/contact', (req, res) => {
    data = {
        who: req.body.who,
        email: req.body.email,
        deparment: req.body.deparment,
    }
    // console.log(data)
    res.render('contact-success',{info:req.body})
})


/* App listening */
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})