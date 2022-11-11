$(document).ready(function () {
  // getting value
  $('#preview').on('click', function () {
    let promptval = $('#elemprompt').val();
    alert(promptval);
  })

  // preview the default value
  let editorval = $('#editor').val();
  $('.previewpane').html(editorval)

});

var editor = CodeMirror.fromTextArea
  (document.getElementById('editor'), {
    mode: "text/html",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
  }).on('change', editor => {
    console.log(editor.getValue());
      document.getElementsByClassName('previewpane')[0].innerHTML = editor.getValue();
  });
editor.setSize("250", "150");

function image() {
  var html = "<img src='' alt='' width='' height=''>" + "\n";
  CodeValue(html);

}

function CodeValue(val) {
  CodeMirror.fromTextArea(document.getElementById('editor'), {
        lineNumbers: true,
        theme: "dracula"
    }).setValue(val);
}

function heading() {
  var html = "<h1>This is a Heading</h1>" + "\n";
  CodeValue(html);
}

function form() {
  var html = `<form>

<input type="email" placeholder="Email">

<input type="text" placeholder="Name">

<input type="submit" value="Submit">

</form>`;
  CodeValue(html);
}
