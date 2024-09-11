//Scroll To Top
$(document).ready(function() {
  var jQuerybackToTop = $("#back-top");
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      jQuerybackToTop.addClass('active');
    } else {
      jQuerybackToTop.removeClass('active');
    }
  });

  jQuerybackToTop.on('click', function(e) {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});

//Scroll To Top


// Loader 
$(window).on('load', function() {
  function initPreLoader() {
    $('#loader').delay(1000).fadeOut();
  }
  initPreLoader();
});
// Loader 




// Toggle 
document.addEventListener('DOMContentLoaded', function() {
   
    const toggleButton = document.getElementById('toggleButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('closeButton');

    
    toggleButton.addEventListener('click', function() {
      mobileMenu.classList.add('active'); 
    });

    closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active'); 
    });

    window.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  });
// Toggle 


$(document).ready(function() {
  // Show the popup for Sign In
  $('#auth-btn').on('click', function() {
      $('.popup-holder').css('display', 'flex'); // Show the popup
      loadSignInForm(); // Load the Sign In form by default
  });

  // Close the popup when the close button is clicked
  $('.close-btn').on('click', function() {
      $('.popup-holder').css('display', 'none'); // Hide the popup
  });

  // Switch to Sign Up form
  $(document).on('click', '#switch-to-signup', function(e) {
      e.preventDefault();
      loadSignUpForm(); // Load Sign Up form
  });

  // Switch back to Sign In form
  $(document).on('click', '#switch-to-signin', function(e) {
      e.preventDefault();
      loadSignInForm(); // Load Sign In form
  });

  // Function to load the Sign In form content
  function loadSignInForm() {
      $('#form-content').html(`
          <fieldset>
              <h2 class="text-md text-medium text-primary">
                  Sign in to 
                  <span class="bg-yellow p-1 rounded-3">
                      <img src="assets/images/Connect-Construction-logo.png" class="rounded-4" height="25px" alt="">
                  </span>
              </h2>
              <p class="text-sm text-medium text-primary">Enter your details below.</p>
              <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email Address">
                  <input type="password" class="form-control" placeholder="Password">
              </div>
               <button type="submit" class="common-btn text-xs text-regular text-white">
              SIGN IN
            </button>
              <a href="#" id="switch-to-signup" >Sign up</a>
          </fieldset>
      `);
  }

  // Function to load the Sign Up form content
  function loadSignUpForm() {
      $('#form-content').html(`
          <fieldset>
              <h2 class="text-md text-medium text-primary">
                  Sign up for 
                  <span class="bg-yellow p-1 rounded-3">
                      <img src="assets/images/Connect-Construction-logo.png" class="rounded-4" height="25px" alt="">
                  </span>
              </h2>
              <p class="text-sm text-medium text-primary">Enter your details to create an account.</p>
              <div class="form-group">
                  <input type="text" class="form-control" placeholder="Full Name">
                  <input type="email" class="form-control" placeholder="Email Address">
                  <input type="password" class="form-control" placeholder="Password">
              </div>
              <button type="submit" class="common-btn text-xs text-regular text-white">
              SIGN UP
            </button>
              <a href="#" id="switch-to-signin">Sign in</a>
          </fieldset>
      `);
  }
});


$(window).on('load', function() {
  $("#blog-carousel").owlCarousel({
    loop: true,
    autoWidth: true,  
    items:3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    center: true,
    margin: 10,
  });
});


$(document).ready(function() {
  var owl = $("#featured-slider").owlCarousel({
    loop: true,
    autoWidth: true,
    items: 3,
    center: false,
    margin: 10,
    lazyLoad: true,
    nav: false, 
    dots: false, 
    navSpeed: 600, 
    autoplayHoverPause: true, 
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  // Custom Navigation Buttons
  $('.custom-owl-prev').on('click', function() {
    owl.trigger('prev.owl.carousel', [800]); 
  });

  $('.custom-owl-next').on('click', function() {
    owl.trigger('next.owl.carousel', [800]); 
  });
});


