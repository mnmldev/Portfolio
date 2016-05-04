$(document).ready(function () {
  $('.console-container').hide();
  $('.welcome').one('mouseover', function () {
    $('.hidden').hide();
    $('.console-container').delay(500).show('slow', function () {
      $('#zero').append(' hello');
      $('#first').delay(250).show('fast', function () {
        $('#second').delay(250).show('fast');
      });
    });
  });
});
