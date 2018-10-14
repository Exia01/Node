/* When document ready */
$(document).ready(() => {
    $('#errors').hide()

    let todos;
    $.ajax({
        type: 'get',
        url: '/api/todo',
        success: (data) => {
            todos = data
            for (let tasks of todos) {
                /*console.log(`This is from the for loop: ${tasks.item}`)*/
                $('#render').append(`<li id="${tasks._id}"> ${tasks.item}</li>`);
            }
        },
        error: function (err, data) {
            console.log(data)
            console.log(err)
            console.log("Error " + err.responseText);
        },

    })


    /*  When clicking submit */
    $('form').on('submit', (e) => {
        e.preventDefault(e)
        /*     create a variable name item */
        let item = $('form input')

        let todo = {
            item: item.val()
        };
        //console.log(todo)
        /* We manipulate the data then 
          Make ajax request to server goes to controller
        */
        $.ajax({
            type: 'POST',
            url: '/api/todo',
            data: todo,
            /* The success only recieves "data" back, I was unable to separate err, from data*/
            success: function (data) {
                if (!Object.keys(data).includes('errors')) {
                    $('#render').append(`<li id="${data._id}"> ${data.item}</li>`);
                    $('form').trigger('reset');
                    $('#errors').hide()
                } else {
                    function* generate(data) {
                        yield data;
                    } for (let key of generate(data)) {
                        console.log(key)
                        //console.log(key.errors.item.message);
                        $('#errors').append(`<h2>${key.errors.item.message}</h2`);
                        $('#errors').show()
                    }

                }
                /*
                console.log(data)
                console.log(JSON.stringify(data))
                console.log(`This is from the data: ${data}`)
                */

            },
            error: function (err, data) {
                console.log(err)
                console.log('Error ' + err.responseText);
            },

        })

    });

    $(document).on('click', 'li', function (e) {
        e.preventDefault(e)
        //console.log(e.target.id)
        let _id = e.target.id
        /* I could not extract the id from "this"
        let x = $(this.length)
        let test1 = JSON.stringify(x);
        let test2 = ($(this).id())
        let test3 = $(this)
        console.log(`This is from test 1: ${test1}`)
        console.log(`This is from test 2: ${test2}`)*/
        $(this).remove()

        $.ajax({
            type: 'delete',
            url: '/api/todo/' + _id,
            success: function (data) {
                console.log('Deleted')
            },
            error: function (err, data) {
                alert("error " + err.responsetext);
            }
        });

    });

});


// I used this to figure out the this and e.id
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable
 *https://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object */