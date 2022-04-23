const drop_menu = document.querySelector('.drop_menu'),
  menu = document.querySelector('.menu'),
  close_menu = document.querySelector('.menu__close'),
  menu_overlay = document.querySelector('.menu__overlay'),
  currentlink = document.querySelectorAll('.menu__link'),
  thanks_close = document.querySelector('.thanks__close'),
  contacts_overlay = document.querySelector('.contacts__overlay'),
  thanks = document.querySelector('.thanks'),
  preloader = document.querySelector('.preloader'),
  menuLinks = document.querySelectorAll('.menu__link[data-goto]'),
  cameraItem = document.querySelectorAll('.camera__wrapper__item');



// gallery photos class switcher

  cameraItem.forEach(link => {
    link.addEventListener('click', () => {
      cameraItem.forEach(item => {
        item.classList.remove('cam_active');
      });
      link.classList.add('cam_active');
      setTimeout(function () {
        menu.classList.remove('cam_active');
      }, 9000);
    });
  });




drop_menu.addEventListener('click', () => {
  menu.classList.add('active');
});

close_menu.addEventListener('click', () => {
  menu.classList.remove('active');
});

menu_overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

thanks_close.addEventListener('click', () => {
  contacts_overlay.classList.add('active');
  thanks.classList.add('active');
  thanks.style.display = "none";
});

currentlink.forEach(link => {
  link.addEventListener('click', () => {
    currentlink.forEach(item => {
      item.classList.remove('active');
    });
    link.classList.add('active');
    setTimeout(function () {
      menu.classList.remove('active');
    }, 800);
  });
});


// Smooth scrolling ~~~

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', LinkClicker);
  });

  function LinkClicker(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}



const szazalek = document.querySelectorAll('.percent__value'),
  lines = document.querySelectorAll('.percent__area');

szazalek.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});



var wow = new WOW({

  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});

wow.init();


// PRELOADER

window.onload = function () {
  preloader.classList.add('prenone');
}

// theme switcher

$('.switch-toggle').click(function () {
  body = document.getElementsByTagName('body')[0];
  if ($('#theme').attr('checked') == "checked") {
    body.classList.toggle("light-theme");
  } else {
    body.classList.toggle("dark-theme");
  }
});