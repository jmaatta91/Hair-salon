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
  document.getElementById("navbar").style.top = "-0";
}



const linksContainer = document.querySelector('.menu__box');

linksContainer.addEventListener('click', (e) => {
  if (e.target.matches('.menu__item')) {
    // disable default behavior
    e.preventDefault();

    // close the side-bar menu
    closeSideMenu();

    // change the location
   window.location.href = e.target.href;
  }
});

function  closeSideMenu() {
  const sideMenuToggle = document.querySelector('#menu__toggle');
  sideMenuToggle.click();
}






