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
  camBag = document.getElementById('camera__bgAnimation'),
  cameraItem = document.querySelectorAll('.camera__wrapper__item');



// gallery photos class switcher

cameraItem.forEach(link => {
  link.addEventListener('click', () => {
    cameraItem.forEach(item => {
      item.classList.remove('cam_active');
    });
    link.classList.add('cam_active');
    // set the background of gallery by a current image
    let linkBg = link.getElementsByTagName("img")[0].src;
    camBag.style.cssText = `background: url(${linkBg}) no-repeat center center;
      background-size: cover;
      border-radius: 16px;`;
    setTimeout(function () {
      menu.classList.remove('cam_active');
    }, 9000);
  });
});


// Drop menu

drop_menu.addEventListener('click', (e) => {
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

// Drop menu links active if scrolls on sections

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu__block nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(`jsAct__${current}`)) {
      li.classList.add("active");
    }
  });
};


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


// Perecent block 

let percentBlock = document.querySelector('.percent');
let percentItem = document.querySelectorAll('.percent__item')
document.addEventListener('scroll', function () {

  const szazalek = document.querySelectorAll('.percent__value'),
    lines = document.querySelectorAll('.percent__area');

  // Percent animation if it is in a view field and if it's not.

  //Check element is in view?
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }

  szazalek.forEach((item, i) => {
    if (isInViewport(item)) {
      lines[i].style.width = item.innerHTML;
    } else {
      lines[i].style.width = 0;
    }
  });
});


let wow = new WOW({

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

$('.theme-toggle').click(function () {
  body = document.getElementsByTagName('body')[0];
  if ($('#theme').attr('checked') == "checked") {
    body.classList.toggle("light-theme");
  } else {
    body.classList.toggle("dark-theme");
  }
});
