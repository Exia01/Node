const path = require('path');
const mongoose = require("mongoose");
// const TodoController = require('../controllers/TodoController.js');
//connect to database
mongoose.connect('mongodb://test:test12345@ds117773.mlab.com:17773/todo-app', { useNewUrlParser: true })

/* Create a schema based of the import */
let TodoSchema = new mongoose.Schema({
	item:{type:String,required:true,minlength:2,maxlength:64}
});

/* todo is based off of the TaskSchema */
let Todo = mongoose.model("Todo",TodoSchema);


/* This is exporting a function which takes in the app and handles all the requests */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) {throw err}
            res.render('todo', {todos:data}) 
        })
    })

    app.post('/todo', (req, res) => {
        console.log('hit here')
        /* todolist.js the data is being catch by ajax */
        let newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err
            res.json(data)
        })
    })

    app.delete('/todo/:item', (req, res) => {
        /* takes the data and assigns it as todo */
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
            if (err) {throw err}
            res.json(data)
            })
        })


    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./client/public/views/404.html'));
    })
};
