(() => {
  document.addEventListener('DOMContentLoaded', () => {

    /**
     * Смена темы.
     */
    const switchModeBtn = document.querySelectorAll(".switch__btn");
    const body = document.body;

    switchModeBtn.forEach((el) => {
      el.onclick = function () {
        const darkMode = body.classList.toggle("switch");

        if (darkMode) {
          localStorage.setItem('darkMode', 'dark')
        } else {
          localStorage.setItem('darkMode', 'light')
        }
      };
    });

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("switch");
    }

    if (localStorage.getItem('darkMode') === 'dark') {
      body.classList.add("switch");
    } else if (localStorage.getItem("darkMode") === "light") {
      body.classList.remove("switch");
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
      const newColorScheme = event.matches ? "dark" : 'light';

      if (newColorScheme === 'dark') {
        body.classList.add("switch");
        localStorage.setItem('darkMode', 'dark')
      } else {
        body.classList.remove("switch");
        localStorage.setItem('darkMode', 'light')
      }
    })

    /**
     * Инициализация слайдера swiper.
     */
    var hero__slider = new Swiper(".hero__slider-init", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 600,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });

    var brand__slider = new Swiper(".brand__slider-init", {
      spaceBetween: 10,
      slidesPerView: "auto",
      freeMode: true,
      loop: true,
      navigation: {
        nextEl: ".brand__slider-btn--next",
        prevEl: ".brand__slider-btn--prev",
      },
    });

    var offer__slider = new Swiper(".offer__slider-init", {
      spaceBetween: 10,
      slidesPerView: 2,
      // freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        601: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1441: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var trade_in__slider = new Swiper(".trade-in__slider-init", {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        601: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1441: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var review__slider = new Swiper(".review__slider-init", {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        601: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    /**
     * Инициализирует аккордеоны на странице.
     * Обрабатывает переключение видимости элементов и кнопки закрытия.
     */
    if ((window.innerWidth <= 600) || (~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform))) {

      // Убираем ссылки для моб. версии
      var btnItem = document.querySelectorAll('.catalog__item-link');
      Array.from(btnItem).forEach(function (iItem, i, btnItem) {
        if (iItem.hasAttribute('href'))
          iItem.setAttribute('href', 'javascript:void');
      });

      document.querySelectorAll('.catalog__item').forEach((item) => {
        item.classList.add('accordion__item');
      });

      document.querySelectorAll('.catalog__item-link').forEach((item) => {
        item.classList.add('accordion__item-btn');
      });

      document.querySelectorAll('.catalog__item-icon').forEach((item) => {
        item.classList.add('accordion__item-btn--icon');
      });

      document.querySelectorAll('.catalog__item-body').forEach((item) => {
        item.classList.add('accordion__item-body');
      });

      document.querySelectorAll('.catalog__item-content').forEach((item) => {
        item.classList.add('accordion__item-content');
      });
    }

    // Получаем все контейнеры аккордеонов на странице
    document.querySelectorAll('.accordion').forEach((accordionContainer) => {
      const closeBtn = accordionContainer.querySelector('.accordion__close');

      /**
       * Обновляет видимость кнопки закрытия в зависимости от состояния аккордеона.
       */
      const updateCloseBtnVisibility = () => {
        if (!closeBtn) return;
        closeBtn.classList.toggle(
          'visible',
          accordionContainer.querySelector('.accordion__item--active'),
        );
      };

      // Обработчик клика по элементам аккордеона
      accordionContainer.addEventListener('click', (event) => {
        const btn = event.target.closest('.accordion__item-btn');

        accordionContainer.querySelectorAll('.accordion__item--active').forEach((item) => {
          item.classList.remove('accordion__item--active');
        });

        if (btn) {
          btn.closest('.accordion__item').classList.toggle('accordion__item--active');
          updateCloseBtnVisibility();
        }
      });

      // Обработчик клика по кнопке закрытия
      closeBtn?.addEventListener('click', () => {
        accordionContainer.querySelectorAll('.accordion__item--active').forEach((item) => {
          item.classList.remove('accordion__item--active');
        });
        updateCloseBtnVisibility();
      });

      // Изначально обновляем видимость кнопки при загрузке страницы
      updateCloseBtnVisibility();

      // Открываем все блоки  секции преимущества на мобильном
      var mobile = document.querySelectorAll(".advantages__item-js");
      mobile.forEach((el) => {
        el.classList.toggle("accordion__item--active");
      });

    });

  });
})();