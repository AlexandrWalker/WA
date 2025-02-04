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
  });
})();