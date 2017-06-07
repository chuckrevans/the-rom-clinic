// Gif Loader
//////////////////////////////////
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
};

//Scroll to top on reload
//////////////////////////////////
$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 100); //100ms for example
});


// Header change in scroll
//////////////////////////////////
  $(function() {
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          // Header, Navbar Color Change
          if (scroll >= 250) {
            $('#header').addClass('background');
              } else {
            $('#header').removeClass('background');
          }
          if (scroll >= 250) {
            $('#brand').addClass('color');
              } else {
            $('#brand').removeClass('color');
          }
          if (scroll >= 250) {
            $('#phone').addClass('color');
              } else {
            $('#phone').removeClass('color');
          }
          if (scroll >= 250) {
            $('#fullName').addClass('color');
              } else {
            $('#fullName').removeClass('color');
          }
          if (scroll >= 250) {
            $('nav').addClass('background');
              } else {
            $('nav').removeClass('background');
          }
          // Logo Swap on Scroll
          if (scroll >= 250) {
            $('#logo').addClass('swap');
              } else {
            $('#logo').removeClass('swap');
          }
          if (scroll >= 250) {
            $('#logo2').addClass('swap');
              } else {
            $('#logo2').removeClass('swap');
          }
          // Hide Header Section on Scroll
          if (scroll >= 350) {
            $('#hidden').addClass('hide');
              } else {
            $('#hidden').removeClass('hide');
          }
          // Change Navbar Links on Scroll
          if (scroll >= 250) {
            $('#btHome,#btStaff,#btServices,#btContact,#btBlog,#btReviews,.dropdown-menu').addClass('scroll');
              } else {
            $('#btHome,#btStaff,#btServices,#btContact,#btBlog,#btReviews,.dropdown-menu').removeClass('scroll');
          }
      });
  });

// fade out text on scroll
//////////////////////////////////
$(window).scroll(function(){
    $(".fadeOut").css("opacity", 1 - $(window).scrollTop() / 150);
  });