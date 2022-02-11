let progitems = document.getElementsByClassName("progress_item").length,
    view_items = document.querySelectorAll('.progress_item'),
    promo = document.querySelector('.promo'), // Получаем длинну секции Промо
    promo_height = promo.clientHeight;

// Прячем прогресс бар изначально
$("#progress_bar").hide();


// Показываем прогресс бар только если промо секцию не видно
$(window).scroll(function() {
  if ($(this).scrollTop() > promo_height) {
      $('.progress_bar').show();
  } else {
      $('.progress_bar').hide();
  }
});


// Добавляем кол-во елементов в прогресс бар от кол-во секций на сайте
for (let i = 0; i < progitems; i++) {
    let elem = document.createElement('span');
    elem.setAttribute("id", "prog__elem" + i);
    elem.setAttribute("class", "prog__elem_js");
    elem.innerHTML = "";
    document.getElementsByClassName('progress_bar')[0].appendChild(elem);
    view_items[i].classList.add('view_item' + i);
}




view_items.forEach((item,i) => {// для каждого елемента отлавливаем видимость пользователя

let progress_act = item;

let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    document.getElementById("prog__elem" + i).classList.add('prog_active');
    
  } else {

    // Если элемент не видно, то запускаем этот код
    document.getElementById("prog__elem" + i).classList.remove('prog_active');
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (progress_act);
});

// Можно запустить функцию сразу. Вдруг, элемент изначально видно
// Visible (progress_act);

});

