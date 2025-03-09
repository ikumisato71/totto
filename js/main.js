const slideLength = document.querySelectorAll(
  ".gallery03 .swiper-a .swiper-slide"
).length;

const params = {
  slidesPerView: "auto",
  loop: true,
  loopedSlides: slideLength,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
    momentum: false,
  },
  grabCursor: true,
};

const initSwiper = () => {
  const mySwiper_a = new Swiper(".gallery03 .swiper-a", {
    ...params,
    on: {
      touchEnd: (swiper) => {
        swiper.slideTo(swiper.activeIndex + 1);
      },
    },
  });

  const mySwiper_b = new Swiper(".gallery03 .swiper-b", {
    ...params,
    autoplay: {
      ...params.autoplay,
      reverseDirection: true,
    },
    on: {
      touchEnd: (swiper) => {
        swiper.slideTo(swiper.activeIndex - 1);
      },
    },
  });
};

window.addEventListener("load", function () {
  initSwiper();
});
// トップに戻るボタン
document.addEventListener("DOMContentLoaded", function () {
  const pageTopBtn = document.getElementById("js-page-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      pageTopBtn.classList.add("show");
    } else {
      pageTopBtn.classList.remove("show");
    }
  });

  pageTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
