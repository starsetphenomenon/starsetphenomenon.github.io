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
  camBag = document.getElementById('camera'),
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


// Perecent block 

let percentBlock = document.querySelector('.percent');
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

  if (isInViewport(percentBlock)) {



    szazalek.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    });

  } else {
    szazalek.forEach((item, i) => {
      lines[i].style.width = 0;
    });
  }
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


// SVG Animation

/* const path = document.querySelector('#portfolio-svg-animation');

let pathLength = path.getTotalLength();

// Check the if elem in a view or not?
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

document.addEventListener('scroll', function () {
  if (isInViewport(path)) {
    path.classList.remove('not-active-svg');
    path.classList.add('active-svg');
  } else {
    path.classList.remove('active-svg');
    path.classList.add('not-active-svg');
  }

}, {
  passive: true
}); */

// Parallax effect
/* 
let parallaxButton = document.getElementById('parallaxButton');

window.addEventListener('scroll', function() {
  
  let value = window.scrollY;

  parallaxButton.style.right = -value * 0.1 + 'px';
}); */



// Promo Illustration MOUSE EFFECT

/* let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;

  return "perspective(100px) " +
    "   rotateX(" + calcX + "deg) " +
    "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
}; */


/* if(screen.width < 900){
  console.log('yeaaepp');
  const tiltElements = document.querySelectorAll('[data-tilt]');
  tiltElements.style.transform = "inherit";
} */


// Promo element animation after MOUSE effect

/* let constrain = 20;
let mouseOverContainer = document.getElementById("promo");
let ex1Layer = document.getElementById("promo__IllustAnim");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;

  return "perspective(2000px) " +
    "   rotateX(" + calcX + "deg) " +
    "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
}; */

/* 
let toolsItem = document.querySelectorAll('.tools__item__inner');

toolsItem.forEach(toolsItem => {
  toolsItem.addEventListener('click', function handleClick(event) {   

    toolsItem.classList.toggle('toolsItemsCLick');
  });
}); */