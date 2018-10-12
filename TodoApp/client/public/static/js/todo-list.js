/* When document ready */
$(document).ready(() => {

  
    /* Making a "Get" call to the api */
    let todos;
    $.ajax({
        type: 'get',
        url: '/api/todo',
        success: (data) => {
            todos = data
            for (let tasks of todos) {
                /*console.log(`This is from the for loop: ${tasks.item}`)*/
                $('#render').append(`<li>${tasks.item}</li>`);
            }
        },
        error: function (err, data) {
            console.log(data)
            console.log(err)
            console.log("Error " + err.responseText);
        },
        return: false

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
            url: '/todo',
            data: todo,
            success: (data) => {
                //location.reload();
                console.log(`This is from the data: ${data}`)
                console.log(JSON.stringify(data))
            },
            error: function (err, data) {
                console.log("Error " + err.responseText);
            },
            return: false

        })

    });

    $('li').on('click', function () {
        /* Replace spaces with hyphens */
        let item = $(this).text().trim().replace(/ /g, "-")
        /* console.log('this is from click ' + item) */
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function (data) {
                //reload page
                location.reload();
            },
            error: function (err, data) {
                alert("Error " + err.responseText);
            }
        });
    });

});