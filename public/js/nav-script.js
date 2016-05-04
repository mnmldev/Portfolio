$(document).ready(function() {
  $('#portfolio').on('click', function() {
    $('header').show();
    portfolio();
    $('#portfolio').html('&lt;Portfolio&gt;');
    resetSelected();
    $('#portfolio').addClass('current');
  });
  hoverNav('#portfolio','Portfolio');
  $('#about').on('click', function () {
    about();
    $('#about').html('&lt;About&gt;');
    resetSelected();
    $('#about').addClass('current');
  });
  hoverNav('#about','About');
  $('#contact').on('click', function () {
    contact();
    $('#contact').html('&lt;Contact&gt;');
    resetSelected();
    $('#contact').addClass('current');
  });
  hoverNav('#contact','Contact');
  $('.home').on('click', function () {
    home();
    $('#home').html('&lt;Home&gt;');
    resetSelected();
    $('#home').addClass('current');
  });
  hoverNav('#home.home','Home');
  scrollViewport();

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

function hoverNav(selector, pageName) {
  if (!($(selector).hasClass('current'))) {
    $(selector).hover(function(){
      $(selector).html('&lt;' + pageName +'&gt;');
    }, function(){
        if (!($(selector).hasClass('current'))) {
          $(selector).html(pageName);
        }
    });
  }
}
function scrollViewport() {
  if ($('.current').hasClass('home')) {
    var viewport = $(window).height();
    window.addEventListener("scroll",function() {
    if(window.scrollY > viewport + 30) {
    $('header').show().slideDown('slow');
    } else {
    $('header').slideUp();
    }
    },false);
  } else {
    $('header').show();
  }
}
