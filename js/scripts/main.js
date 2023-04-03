const progressSlide = document.querySelector('.js-progress')

var swiper = new Swiper(".banners", {
  spaceBetween: 45,
  pagination: {
    el: ".left .swiper-pagination",
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false
  },
  loop: true,
  on: {
    init: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate');
        progressSlide.classList.add('active');
    },
    slideChangeTransitionStart: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
    },
    slideChangeTransitionEnd: function() {
        progressSlide.classList.add('animate');
    }
}
});

var swiper = new Swiper(".depoimentos", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

var swiper = new Swiper(".massoterapia", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
});

AOS.init({
  duration: 1000,
  once: true
})

const openFaq = document.querySelectorAll('.js-accordion');

openFaq.forEach(open => {
  open.addEventListener('click', () => {
    let fatherElement = open.parentElement;

    fatherElement.classList.toggle('active');
  })
})

const header = document.getElementById('js-header');

function fixedMenu() {
  if(window.pageYOffset > 80) {
    header.classList.add('fixed-menu');
  } else {
    header.classList.remove('fixed-menu');
  }
}

document.addEventListener('scroll', fixedMenu);

const btnMobile = document.getElementById('js-btn-menu-mobile');
const openHeader = document.querySelectorAll('.js-link li a');


btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active');
  document.documentElement.classList.toggle('menu-opened');
})

openHeader.forEach(open => {
  open.addEventListener('click', () => {
    btnMobile.classList.remove('is-active');
    document.documentElement.classList.remove('menu-opened');
  })
})