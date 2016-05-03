$(document).ready(function () {
  $('.console-container').hide();
  $('.welcome').hover(function () {
    $('.console-container').delay(500).show('slow', function () {
      $('.overlay p').append(' hello');
    });
  });
});
