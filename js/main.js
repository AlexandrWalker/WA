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
      spacebetween: 30,
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

    /**
     * Инициализирует аккордеоны на странице.
     * Обрабатывает переключение видимости элементов и кнопки закрытия.
     */
    if ((window.innerWidth <= 600) || (~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform))) {

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
          if (btn) {

            active = document.getElementsByClassName('accordion__item--active');
            if (active.length > 0 && active[0] !== this)
              active[0].classList.remove('accordion__item--active');

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
    }

  });
})();