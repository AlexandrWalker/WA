(() => {
  document.addEventListener('DOMContentLoaded', () => {

    /**
     * Инициализирует аккордеоны для каталога в моб версии.
     */
    if ((window.innerWidth <= 600) || (~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform))) {

      // Убираем ссылки для моб. версии
      var btnItem = document.querySelectorAll('.catalog__item-link');
      Array.from(btnItem).forEach(function (iItem, i, btnItem) {
        if (iItem.hasAttribute('href'))
          iItem.setAttribute('href', 'javascript:void');
      });

      // Добавляем классы каталога для преобразования в аккордеон
      document.querySelectorAll('.catalog__items').forEach((item) => {
        item.classList.add('accordion');
      });

      document.querySelectorAll('.catalog__item').forEach((item) => {
        item.classList.add('accordion__item');
      });

      document.querySelectorAll('.catalog__item-link').forEach((item) => {
        item.classList.add('accordion__item-btn');
      });

      document.querySelectorAll('.catalog__item-icon').forEach((item) => {
        item.classList.add('accordion__item-icon');
      });

      document.querySelectorAll('.catalog__item-body').forEach((item) => {
        item.classList.add('accordion__item-body');
      });

      document.querySelectorAll('.catalog__item-content').forEach((item) => {
        item.classList.add('accordion__item-content');
      });
    }

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
      // slidesPerView: 9,
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
      grabCursor: true,
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
      // freeMode: true,
      grabCursor: true,
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
      // freeMode: true,
      grabCursor: true,
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

    var info__slider = new Swiper(".info__slider-init", {
      spaceBetween: 10,
      slidesPerView: 2,
      // freeMode: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        1201: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    /**
     * Смена темы.
     */
    function switchFunc() {
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
    };

    /**
     * Инициализирует аккордеоны на странице.
     * Обрабатывает переключение видимости элементов и кнопки закрытия.
     */
    function accordionFunc() {
      // Получаем все контейнеры аккордеонов на странице
      document.querySelectorAll('.accordion').forEach((accordionContainer) => {
        // Обработчик клика по элементам аккордеона
        accordionContainer.addEventListener('click', (event) => {
          const btn = event.target.closest('.accordion__item-btn');
          if (btn) {
            btn.closest('.accordion__item').classList.toggle('accordion__item--active');
            btn.classList.toggle('accordion__item-btn--active');
          }
        });
      });

      // accordionContainer.querySelectorAll('.accordion__item--active').forEach((item) => {
      //   item.classList.remove('accordion__item--active');
      // });
    };

    /**
     * Управляет переключением вкладок на странице.
     * Добавляет и удаляет классы активности для кнопок и панелей вкладок.
     * Поддерживает вложенные табы любой глубины и сохраняет активное состояние у вложенных табов при переключении внешних.
     */
    function tabsFunc() {
      document.querySelectorAll('.tabs').forEach((tabsContainer) => {
        tabsContainer.addEventListener('click', (event) => {
          const tabsBtn = event.target.closest('.tabs__btn');
          if (!tabsBtn || !tabsContainer.contains(tabsBtn)) return;

          // Останавливаем всплытие, чтобы вложенные табы не влияли на родительские
          event.stopPropagation();

          // Ищем ближайший контейнер, к которому принадлежит нажатая кнопка
          const currentTabsContainer = tabsBtn.closest('.tabs');
          if (!currentTabsContainer) return;

          // Сбрасываем активные состояния кнопок и панелей только внутри текущего уровня
          const tabsBtns = Array.from(currentTabsContainer.querySelectorAll('.tabs__btn'));
          const tabsPanels = Array.from(currentTabsContainer.querySelectorAll('.tabs__panel'));

          tabsBtns.forEach((btn) => {
            if (btn.closest('.tabs') === currentTabsContainer) {
              btn.classList.remove('tabs__btn--active');
            }
          });

          tabsPanels.forEach((panel) => {
            if (panel.closest('.tabs') === currentTabsContainer) {
              panel.classList.remove('tabs__panel--active');
            }
          });

          // Устанавливаем активное состояние для выбранной вкладки
          tabsBtn.classList.add('tabs__btn--active');
          const targetPanel = currentTabsContainer.querySelector(
            `.tabs__panel[data-tab="${tabsBtn.dataset.tab}"]`,
          );
          if (targetPanel) {
            targetPanel.classList.add('tabs__panel--active');
          }
        });
      });
    };

    function dropdownFunc() {
      /**
       * Обрабатывает поведение выпадающих элементов на странице.
       * Управляет открытием и закрытием dropdown-меню при клике по триггеру или кнопке закрытия.
       */
      const toggleDropdown = (dropdown, isOpen) => {
        dropdown.classList[isOpen ? 'add' : 'remove']('dropdown--opened');
      };

      document.querySelectorAll('.dropdown').forEach((dropdown) => {
        dropdown.addEventListener('click', ({ target }) => {
          const trigger = target.closest('.dropdown__trigger');
          const closeBtn = target.closest('.dropdown__close');

          if (trigger) toggleDropdown(dropdown, !dropdown.classList.contains('dropdown--opened'), document.body.classList.toggle('no-scroll'));
          if (closeBtn) toggleDropdown(dropdown, false, document.body.classList.toggle('no-scroll'));
        });
      });

      document.addEventListener('click', ({ target }) => {
        if (!target.closest('.dropdown')) {
          document
            .querySelectorAll('.dropdown--opened')
            .forEach((dropdown) => toggleDropdown(dropdown, false));
        }
      });
    };

    switchFunc();
    accordionFunc();
    tabsFunc();
    dropdownFunc();

  });
})();