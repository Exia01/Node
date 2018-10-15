const path = require('path');
const TodoController = require('../controllers/TodoController.js');


/* This is exporting a function which takes in the app and handles all the requests */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('landing')
    })

    app.get('/todo', (req, res) => {
        res.render('todo-ajax')
    })


    /* API Semi-restful setup */
    app.get('/api/todo', TodoController.all);
    app.post('/api/todo', TodoController.create);
    app.delete('/api/todo/:id', TodoController.delete); 

    /* Catch all */
    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./client/public/views/404.html'));
    })

};