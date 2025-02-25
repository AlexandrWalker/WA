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
      document.querySelectorAll('.catalog__item').forEach((item) => {
        item.classList.add('accordion__item');
      });

      document.querySelectorAll('.catalog__item-link').forEach((item) => {
        item.classList.add('accordion__item-head');
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

      // function accordionFunc() {
      //   // Получаем все контейнеры аккордеонов на странице
      //   document.querySelectorAll('.accordion').forEach((accordionContainer) => {
      //     // Обработчик клика по элементам аккордеона
      //     accordionContainer.addEventListener('click', (event) => {
      //       const btn = event.target.closest('.accordion__item-btn');
      //       const btnActive = event.target.closest('.accordion__item-btn--active');

      //       if (btn) {
      //         btn.closest('.accordion__item').classList.toggle('accordion__item--active');
      //         btn.classList.toggle('accordion__item-btn--active');
      //       }
      //     });
      //   });
      // };
    }

    // if ((window.innerWidth >= 601)) {
    //   function accordionFunc() {
    //     var menuLink = document.querySelectorAll('.accordion__item-btn');
    //     var active = document.getElementsByClassName('accordion__item-btn--active');
    //     var menuListLink = document.querySelectorAll('.accordion__list-btn');
    //     var menuListActive = document.getElementsByClassName('accordion__list-btn--active');

    //     Array.from(menuLink).forEach(function (item, i, menuLink) {
    //       item.addEventListener('click', function (e) {
    //         if (active.length > 0 && active[0] !== this) {
    //           active[0].parentNode.classList.remove('accordion__item--active');
    //           active[0].classList.remove('accordion__item-btn--active');
    //         }
    //         this.parentNode.classList.toggle('accordion__item--active');
    //         this.classList.toggle('accordion__item-btn--active');
    //       });
    //     });

    //     Array.from(menuListLink).forEach(function (item, i, menuListLink) {
    //       item.addEventListener('click', function (e) {
    //         if (menuListActive.length > 0 && menuListActive[0] !== this) {
    //           menuListActive[0].parentNode.classList.remove('accordion__list-item--active');
    //           menuListActive[0].classList.remove('accordion__list-btn--active');
    //         }
    //         this.parentNode.classList.toggle('accordion__list-item--active');
    //         this.classList.toggle('accordion__list-btn--active');
    //       });
    //     });
    //   };
    // }



    /**
     * Инициализация слайдера swiper.
     */
    var hero__slider = new Swiper(".hero__slider-init", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: false
      },
      speed: 600,
      autoplay: {
        delay: 5000,
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
      slidesPerGroup: 3,
      // slidesPerView: 9,
      speed: 600,
      freeMode: true,
      // loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: ".brand__slider-btn--next",
        prevEl: ".brand__slider-btn--prev",
      },
    });

    var main__slider = new Swiper(".main__slider-init", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        321: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
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
      speed: 600,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        601: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var info__slider = new Swiper(".info__slider-init", {
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: {
        forceToAxis: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        321: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
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
    // function accordionFunc() {
    //   /* --- */
    //   // Получаем все контейнеры аккордеонов на странице
    //   document.querySelectorAll('.accordion').forEach((accordionContainer) => {
    //     // Обработчик клика по элементам аккордеона
    //     accordionContainer.addEventListener('click', (event) => {
    //       const btn = event.target.closest('.accordion__item-btn');
    //       const btnActive = event.target.closest('.accordion__item-btn--active');

    //       if (btn) {
    //         btn.closest('.accordion__item').classList.toggle('accordion__item--active');
    //         btn.classList.toggle('accordion__item-btn--active');
    //       }
    //       /* --- */

    //       // if (btnActive) {
    //       //   btnActive.closest('.accordion__item').classList.remove('accordion__item--active');
    //       //   btnActive.classList.remove('accordion__item-btn--active');
    //       // } else {
    //       //   document.querySelectorAll('.accordion__item--active').forEach((item) => {
    //       //     item.classList.remove('accordion__item--active');
    //       //   });
    //       //   document.querySelectorAll('.accordion__item-btn--active').forEach((item) => {
    //       //     item.classList.remove('accordion__item-btn--active');
    //       //   });
    //       //   btn.closest('.accordion__item').classList.add('accordion__item--active');
    //       //   btn.classList.add('accordion__item-btn--active');
    //       // }
    //       /* --- */
    //     });
    //   });
    //   /* --- */

    //   // accordionContainer.querySelectorAll('.accordion__item--active').forEach((item) => {
    //   //   item.classList.remove('accordion__item--active');
    //   // });

    //   /* HACK */
    //   // var menuLink = document.querySelectorAll('.accordion__item-btn'),
    //   //   active = document.getElementsByClassName('accordion__item-btn--active');

    //   // Array.from(menuLink).forEach(function (item, i, menuLink) {
    //   //   item.addEventListener('click', function (e) {
    //   //     if (active.length > 0 && active[0] !== this) {
    //   //       active[0].parentNode.classList.remove('accordion__item--active');
    //   //       active[0].classList.remove('accordion__item-btn--active');
    //   //     }
    //   //     this.parentNode.classList.toggle('accordion__item--active');
    //   //     this.classList.toggle('accordion__item-btn--active');
    //   //   });
    //   // });

    // };
    function accordionFunc() {
      var accLink = document.querySelectorAll('.accordion__item-head'),
        accListLink = document.querySelectorAll('.accordion__list-head'),
        accActive = document.getElementsByClassName('accordion__item-head--active'),
        accListActive = document.getElementsByClassName('accordion__list-head--active');

      Array.from(accLink).forEach(function (accItem, i, accLink) {
        accItem.addEventListener('click', function (e) {
          if (accActive.length > 0 && accActive[0] !== this) {
            accActive[0].parentNode.classList.remove('accordion__item--active');
            accActive[0].classList.remove('accordion__item-head--active');
          }
          if (accListActive.length > 0 && accListActive[0] !== this) {
            accListActive[0].parentNode.classList.remove('accordion__list-item--active');
            accListActive[0].classList.remove('accordion__list-head--active');
          }

          this.parentNode.classList.toggle('accordion__item--active');
          this.classList.toggle('accordion__item-head--active');
        });
      });

      Array.from(accListLink).forEach(function (accListItem, i, accListLink) {
        accListItem.addEventListener('click', function (e) {
          if (accListActive.length > 0 && accListActive[0] !== this) {
            accListActive[0].parentNode.classList.remove('accordion__list-item--active');
            accListActive[0].classList.remove('accordion__list-head--active');
          }

          this.parentNode.classList.toggle('accordion__list-item--active');
          this.classList.toggle('accordion__list-head--active');
        });
      });
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
            /* HACK */
            targetPanel.classList.add('tabs__panel--active');
          }
        });
      });
    };



    /**
     * Обрабатывает поведение выпадающих элементов на странице.
     * Управляет открытием и закрытием dropdown-меню при клике по триггеру или кнопке закрытия.
     */
    function dropdownFunc() {
      const toggleDropdown = (dropdown, isOpen) => {
        dropdown.classList[isOpen ? 'add' : 'remove']('dropdown--opened');
      };

      document.querySelectorAll('.dropdown').forEach((dropdown) => {
        dropdown.addEventListener('click', ({ target }) => {
          const trigger = target.closest('.dropdown__trigger');
          const closeBtn = target.closest('.dropdown__close');

          if (trigger) toggleDropdown(dropdown, !dropdown.classList.contains('dropdown--opened'), document.body.classList.toggle('no-scroll'));
          if (closeBtn) toggleDropdown(dropdown, false, document.body.classList.remove('no-scroll'));
        });
      });

      document.addEventListener('click', ({ target }) => {
        if (!target.closest('.dropdown')) {
          document
            .querySelectorAll('.dropdown--opened')
            .forEach((dropdown) => toggleDropdown(dropdown, false, document.body.classList.toggle('no-scroll')));
        }
      });

      const dropdown = document.querySelector('.dropdown');
      const overlay = document.querySelector('.menu__overlay');
      const closeButton = document.querySelector('.dropdown__trigger');

      const closeMenu = () => {
        dropdown.classList.remove('dropdown--opened');
        document.body.classList.remove('no-scroll');
      };

      // Закрытие меню по клику на кнопку закрытия или на overlay
      [closeButton, overlay].forEach((element) => element.addEventListener('click', closeMenu));
    };



    /**
     * Управляет переключением кнопки в избранное на карточке товара.
     * Добавляет и удаляет классы активности для кнопок в избранное.
     */
    function favFunc() {

      document.querySelectorAll('.card').forEach((cardContainer) => {
        cardContainer.addEventListener('click', (events) => {
          const cardBtn = events.target.closest('.card__fav');
          if (!cardBtn || !cardContainer.contains(cardBtn)) return;

          events.stopPropagation();

          // Ищем ближайший контейнер, к которому принадлежит нажатая кнопка
          const currentCardContainer = cardBtn.closest('.card');
          if (!currentCardContainer) return;

          // Сбрасываем активные состояния кнопок
          const cardBtns = Array.from(currentCardContainer.querySelectorAll('.card__fav'));

          cardBtns.forEach((btns) => {
            if (btns.closest('.card') === currentCardContainer) {
              btns.classList.toggle('card__fav--active');
            }
          });

        });
      });
    };







    /**
     * Инициализация плавного скролла
     */
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // let smoother = ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    //   smoothTouch: 0.1,
    // });



    /**
     * Активация занели для моб. версии при скролле
     */
    // function panelFunc() {
    //   const panel = document.querySelector('.panel');

    //   const openPanel = () => {
    //     panel.classList.add('panel--active');
    //   };

    //   const closePanel = () => {
    //     panel.classList.remove('panel--active');
    //   };

    //   window.addEventListener('scroll', function (e) {

    //     let scrollPosition = window.scrollY;

    //     if (scrollPosition != 0) {
    //       openPanel();
    //     } else {
    //       closePanel();
    //     }
    //   });
    // };

    // panelFunc();
    switchFunc();
    accordionFunc();
    tabsFunc();
    dropdownFunc();
    favFunc();

  });
})();