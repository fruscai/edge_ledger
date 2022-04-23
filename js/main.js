// Navbar Transparency
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  // YOffset checks vertical axis of scroll (up and down)
  if (window.pageYOffset > 100) {
    // removes class of top once scroll down begins
    navbar.classList.remove('top');
    if (!scrolled) {
      // moves things along Y axis
      navbar.style.transform = 'translateY(-200px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0px)';
      scrolled = true;
    }, 300);
  } else {
    // adds top {background:transparency} class back when navbar reaches top
    navbar.classList.add('top');
    scrolled = false;
  }
}

// Smooth Scroll - Enabled by JQuery Above
// $('#navbar a, .btn').on('click', function (e) { REMOVED BTN CLASS TO ALLOW SUBMIT TO FUNCTION

// commented out Smooth Scrolling JS because of scroll-behaviour: smooth; attribute in CSS

// $('#navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         // the number value here can adjust where the specific position on the page is when scroll finishes
//         scrollTop: $(hash).offset().top - 80,
//       },
//       800
//     );
//   }
// });