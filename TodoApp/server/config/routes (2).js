const path = require('path');
const mongoose = require("mongoose");
const TodoController = require('../controllers/TodoController.js');
/*connect to database*/
mongoose.connect('mongodb://test:test12345@ds117773.mlab.com:17773/todo-app', {
    useNewUrlParser: true
})

/* Create a schema based of the import */
let TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, "Item/Todo  must be at least two characters"],
        minlength: [2, "Todo must be at least two characters"],
        maxlength: 64
    }
});

/* todo is based off of the TaskSchema */
let Todo = mongoose.model("Todo", TodoSchema);


/* This is exporting a function which takes in the app and handles all the requests */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('landing')
    })


    app.get('/todo', (req, res) => {
        res.render('todo-ajax')
    })


    /* API Semi-restful setup */
    app.get('/api/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            //console.log(`coming directly from the post ${err}`)
            //console.log(`coming directly from the post ${data}`)
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    })


    app.post('/api/todo', (req, res) => {
        let newTodo = Todo(req.body).save((err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }

        })
    })

    app.delete('/api/todo/:_id', (req, res) => {
        //console.log(req.params._id)
        let id = req.params._id
        Todo.findOne({
            _id: id
        }).deleteOne( (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    })

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./client/public/views/404.html'));
    })

};