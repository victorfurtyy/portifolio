function d(element) {return document.querySelector(element)}


addEventListener('scroll', function () {
  if ((window.scrollY >= d('#home').offsetTop) && (window.scrollY < d('#sobre').offsetTop - d('#sobre').offsetTop * .3)) {
    d('.menu-pc .item:nth-child(1) h1').classList.add('hover');
    d('.items-mobile .item:nth-child(1) h1').classList.add('hover');

    d('.menu-pc .item:nth-child(2) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(3) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(3) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(5) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(4) h1').classList.remove('hoverC');
    d('.items-mobile .item:nth-child(7) h1').classList.remove('hoverC');
  }
  else if ((window.scrollY >= d('#sobre').offsetTop - d('#sobre').offsetTop * .3) && (window.scrollY < d('#projetos').offsetTop - d('#projetos').offsetTop * .3)) {
    d('.menu-pc .item:nth-child(1) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(1) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(2) h1').classList.add('hover');
    d('.items-mobile .item:nth-child(3) h1').classList.add('hover');

    d('.menu-pc .item:nth-child(3) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(5) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(4) h1').classList.remove('hoverC');
    d('.items-mobile .item:nth-child(7) h1').classList.remove('hoverC');
  }
  else if ((window.scrollY >= d('#projetos').offsetTop - d('#projetos').offsetTop * .3) && (window.scrollY < d('#contato').offsetTop - d('#contato').offsetTop * .1)) {
    d('.menu-pc .item:nth-child(1) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(1) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(2) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(3) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(3) h1').classList.add('hover');
    d('.items-mobile .item:nth-child(5) h1').classList.add('hover');

    d('.menu-pc .item:nth-child(4) h1').classList.remove('hoverC');
    d('.items-mobile .item:nth-child(7) h1').classList.remove('hoverC');
  }
  else if (window.scrollY >= d('#contato').offsetTop - d('#contato').offsetTop * .1) {
    d('.menu-pc .item:nth-child(1) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(1) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(2) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(3) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(3) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(5) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(4) h1').classList.add('hoverC');
    d('.items-mobile .item:nth-child(7) h1').classList.add('hoverC');
  }
  else {
    d('.menu-pc .item:nth-child(1) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(1) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(2) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(3) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(3) h1').classList.remove('hover');
    d('.items-mobile .item:nth-child(5) h1').classList.remove('hover');

    d('.menu-pc .item:nth-child(4) h1').classList.remove('hoverC');
    d('.items-mobile .item:nth-child(7) h1').classList.remove('hoverC');
  }
});


// AUTO BUTTON SCROLL
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      });
    } // End if
  });
});
function scrollToContact() {
  setTimeout(() => {
    $('html, body').animate({scrollTop: $('#contato').offset().top}, 800, function(){})
  },250)
}


let menuOpen = false;
d('.menu-mobile').addEventListener('click', () => {
	if (!menuOpen) {
		d('.menu-mobile').classList.add('open');
    d('.items-mobile').style = 'left:0vh;';
		menuOpen = true;
	} else {
		d('.menu-mobile').classList.remove('open');
    d('.items-mobile').style = '';
		menuOpen = false;
	}
})