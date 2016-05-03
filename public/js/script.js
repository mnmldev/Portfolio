$(document).ready(function() {
  $('#portfolio').on('click', function() {
    portfolio();
    $('#portfolio').html('&lt;Portfolio&gt;');
    resetSelected();
    $('#portfolio').addClass('current');
  });
  $('#about').on('click', function () {
    about();
    $('#about').html('&lt;About&gt;');
    resetSelected();
    $('#about').addClass('current');
  });
  $('#contact').on('click', function () {
    contact();
    $('#contact').html('&lt;Contact&gt;');
    resetSelected();
    $('#contact').addClass('current');
  });
  $('.home').on('click', function () {
    home();
    $('#home').html('&lt;Home&gt;');
    resetSelected();
    $('#home').addClass('current');
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

function resetSelected () {
  var id = $('.current').attr('id');

  if (id == 'home') {
    $('#home').html('Home');
    $('#home').removeClass('current');
  } else if (id == 'portfolio') {
    $('#portfolio').html('Portfolio');
    $('#portfolio').removeClass('current');
  } else if (id == 'about') {
    $('#about').html('About');
    $('#about').removeClass('current');
  } else if (id == 'contact') {
    $('#contact').html('Contact');
    $('#contact').removeClass('current');
  }
}
