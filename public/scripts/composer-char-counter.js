$(document).ready(function() {
  const maxChars = 140;
  $('.new-tweet textarea').on('input', function() {
    const textlength = $(this).val().length;
    const counter = maxChars- textlength;
    const count = $(this).parent().find('.counter');

    if (counter < 0) {
      count.css('color', 'red');
    } else {
      count.css('color', '#545149');
    }
    count.text(counter);
  })
});