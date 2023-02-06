/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

var menuBtn = document.getElementById("menu__toggle");
menuBtn.addEventListener("click", showMenuBar);

function showMenuBar(){
  document.getElementById("navbar").style.top = "0";
}

$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('#main-box').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
