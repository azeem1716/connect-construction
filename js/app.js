

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 0, // Reduced space between slides

    breakpoints: {
      // when window width is >= 576px (Small devices like tablets)
      320: {
        slidesPerView: 1,
        spaceBetween: 0, // Reduced space between slides
      },
      // when window width is >= 768px (Medium devices like tablets in landscape mode)
      768: {
        slidesPerView: 2,
        spaceBetween: 0, // Reduced space between slides
      },
      // when window width is >= 992px (Large devices like desktops)
      992: {
        slidesPerView: 3,
        spaceBetween: 0, // Reduced space between slides
      },
      // when window width is >= 1200px (Extra large devices like widescreen desktops)
      1200: {
        slidesPerView: 2,
        spaceBetween: 0, // Reduced space between slides
      } },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



const blogSwiper = new Swiper('.blog-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 2000,
  },

  speed: 400,
  centeredSlides: true,
  spaceBetween: 0, // Reduced space between slides

  // breakpoints: {
  //   // when window width is >= 576px (Small devices like tablets)
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 0, // Reduced space between slides
  //   },
  //   // when window width is >= 768px (Medium devices like tablets in landscape mode)
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 0, // Reduced space between slides
  //   },
  //   // when window width is >= 992px (Large devices like desktops)
  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 0, // Reduced space between slides
  //   },
  //   // when window width is >= 1200px (Extra large devices like widescreen desktops)
  //   1200: {
  //     slidesPerView: 2,
  //     spaceBetween: 0, // Reduced space between slides
  //   } },


});









document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const toggleButton = document.getElementById('toggleButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('closeButton');

    // Add event listener for opening the mobile menu
    toggleButton.addEventListener('click', function() {
      mobileMenu.classList.add('active'); // Slide down the menu
    });

    // Add event listener for closing the mobile menu
    closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active'); // Slide up the menu
    });

    // Optionally close the menu when clicking outside
    window.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  });



  