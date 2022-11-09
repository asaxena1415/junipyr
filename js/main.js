$(document).ready(function() {
  // getting value
  $('#preview').on('click', function() {
    let promptval = $('#elemprompt').val();
    if(promptval == '') {
      console.log('value is empty')
    }else {
      console.log('contain values')
    }
  })

  
})
