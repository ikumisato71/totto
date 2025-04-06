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

// GSAP　MV
const navLinks = document.querySelectorAll(".nav__list__item-link");
const right = document.querySelectorAll(".mv__item--right");
const title = document.querySelector(".title__logo--btn");
const circle = document.querySelector(".mv__circle");
const left = document.querySelector(".mv__item--left");

const TLFADE = gsap.timeline();

TLFADE.from(title, {
  autoAlpha: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
})
  .from(
    navLinks,
    {
      autoAlpha: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    },
    "-=0.8"
  )
  .from(
    left,
    {
      autoAlpha: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8"
  )
  .from(
    circle,
    {
      autoAlpha: 0,
      y: -50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    },
    "-=0.6"
  )
  .from(
    right,
    {
      autoAlpha: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.6"
  );
