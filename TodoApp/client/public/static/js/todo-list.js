/* When document ready */
$(document).ready(() => {

  /*  When clicking submit */
  $('form').on('submit', () => {
    /*     create a variable name item */
    let item = $('form input');
    let todo = {
      item: item.val()
    };
    /* We manipulate the data then 
      Make ajax request to server goes to controller
    */
    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: (data) => {
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function() {
    /* Replace spaces with hyphens */
    // console.log('hit click')
    let item = $(this).text().trim().replace(/ /g, "-")
    console.log('this is from click ' + item)
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data) {
        //reload page
        location.reload();
      },
      error: function (err, data) {
        alert("Error " + err.responseText);
      }
    });
  });

});