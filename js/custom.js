jQuery(document).ready(function ($) {

  $('.main-bnr .container').slick({
    dots: true,
    arrows: false
  });
  

  $('.tovar_slider').slick({
    prevArrow: '<div class="slider-arrow slider-bizi-prev"></div>',
    nextArrow: '<div class="slider-arrow slider-bizi-next"></div>',
    arrows: true,
    dots: true
  });


  $('.reviews-slider').slick({

    prevArrow: '<div class="slider-arrow slider-arrow-prev"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-next"></div>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 1,
        }
    },
  ]
  });


  $('.hamburger').click(function () {
    $('.mob-menu').css('bottom', '0');
  });
  $('.close-menu').click(function () {
    $('.mob-menu').css('bottom', '140%');
  });
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

$(function () {
  $('.mobile_menu-svg').click(function () {
    $('.main-mobile-menu').toggleClass('mobile-menu')
    $('body').toggleClass('lock')
  })  
});

$(function () {
  $('.contact-svg').click(function () {
    $('.contact-svg').toggleClass('active')
  })
  $('.cabnet-svg').click(function () {
    $('.cabnet-svg').toggleClass('active')
  })
  $('.search-svg').click(function () {
    $('.search-svg').toggleClass('active')
  }) 
  $('.mobile_menu-svg').click(function () {
    $('.mobile_menu-svg').toggleClass('active')
  }) 
});


/* При нажатии кнопки, переключаться между скрытием 
и отображением раскрывающегося содержимого */
function myFunction() {
    document.getElementById("submenu").classList.toggle("submenu-content");
}

// Закроется раскрывающееся меню, если щелкаем вне его
window.onclick = function(event) {
  if (!event.target.matches('.mobile-menu__btn')) {

    var dropdowns = document.getElementsByClassName("submenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}