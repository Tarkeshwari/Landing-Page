function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


var swiper = new Swiper(".hero-slider", {
    spaceBetween: 80,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

  var swiper = new Swiper(".p-slider", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  });
  

  const favorite = document.querySelector(".favorite");
  favorite.forEach((el) => {
    el.addEventListener("click",function () {
      el.classList.toggle("active");
    });
  });
  

  var swiper = new Swiper(".new-slider", {
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
    },
  });
  

  var swiper = new Swiper(".testimonial-slider", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
