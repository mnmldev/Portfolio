$(document).ready(function() {
  $('#portfolio').on('click', function() {
    portfolio();
  });
  $('#about').on('click', function () {
    about();
  });
  $('#contact').on('click', function () {
    contact();
  });
  $('.home').on('click', function () {
    home();
  });
});

function portfolio () {
	$.get('portfolio.html')
	.done(function( data ) {
    $('.main').html(data);
  	});
}

function about () {
	$.get('about.html')
	.done(function( data ) {
    $('.main').html(data);
  	});
}

function contact () {
	$.get('contact.html')
	.done(function( data ) {
    $('.main').html(data);
  	});
}

function home () {
	$.get('home.html')
	.done(function( data ) {
    $('.main').html(data);
  	});
}
