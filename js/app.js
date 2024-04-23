// -- mobileMenu

const body = document.querySelector('body')
const header = document.querySelector('.header')
const btnMenu = document.querySelector('.header__btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')

// клік поза хедером закриває меню
window.addEventListener('click', (e) => {
  if (!e.target.closest('.header') && menu.classList.contains('open')) {
    btnMenu.classList.remove('open')
    menu.classList.remove('open')
  }
})

if (btnMenu != null) {
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('open')
    menu.classList.toggle('open')
  })
}

for (link of menuLink) {
  link.addEventListener('click', () => {
    btnMenu.classList.remove('open')
    menu.classList.remove('open')
  })
}

function lockBodyScroll(action) {
  if (action == 'lock') body.classList.toggle('lock')
  else if (action == 'unlock') body.classList.remove('lock')
}

// -- home slider

let sliderHome = new Swiper('.hero__bg-slider', {
  effect: 'fade',
  speed: 1200,
  slidesPerGroup: 1,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.hero__bg-slider__swiper-pagination',
    clickable: true,
  },
})

let sliderReviews = new Swiper('.reviews__slider', {
  speed: 800,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.reviews__slider-btn.btn-right',
    prevEl: '.reviews__slider-btn.btn-left',
  },
})
