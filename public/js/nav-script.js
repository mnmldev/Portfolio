$(document).ready(function() {
  var viewport = $(window).height();
  $('#portfolio').on('click', function() {
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
  $('.home').on('click', function (e) {
    e.preventDefault();
    home();
    $('#home').html('&lt;Home&gt;');
    if (!($('.home').hasClass('current'))) {
      resetSelected();
    }
    $('#home').addClass('current');
    $("body, html").animate({
            scrollTop: viewport+ 90
        }, 400);
  });
  hoverNav('#home','Home');
  scrollViewport(viewport);
  getNav();

  preventSubmit();
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
function scrollViewport(viewport) {
  if ($('.current').hasClass('home')) {
    window.addEventListener("scroll",function() {
    if(window.scrollY > viewport) {
    $('header').slideDown();
  } else if ($('.current').hasClass('home')) {
    $('header').slideUp();
    }
    },false);
  }
}
function getNav() {
  if (!($('.current').hasClass('home'))) {
    console.log('hello');
    $('header').css('display', 'block');
  }
}
function preventSubmit() {
  $('.console-submit').on('submit', function(e) {
    validateForm(e);
  return false;
});
}

function validateForm(e) {
    if (e.preventDefault) {
       e.preventDefault();
    }
    e.returnValue = false; // for IE
}
