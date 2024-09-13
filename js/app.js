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
              <h2 class="text-md text-medium text-white">
                  Sign in to 
                  <span class="bg-yellow p-1 rounded-3">
                      <img src="assets/images/Connect-Construction-logo.png" class="rounded-4" height="25px" alt="">
                  </span>
              </h2>
              <p class="text-sm text-medium text-white">Enter your details below.</p>
              <div class="form-group">
              <div class="input-container">
            <input type="text" placeholder="Name">
             <i class="fa-regular fa-user user-icon"></i>
        </div>

        <div class="input-container mt-3">
          <input type="text" placeholder="Phone Number">
          <i class="fa-solid fa-phone user-icon"></i>
      </div>


                 
              </div>
               <div>
               <button type="submit" class="auth-btn  text-xs text-regular text-gray py-3 w-100">
              SIGN IN
            </button>
               </div>
              <a href="#" id="switch-to-signup" class="text-sm text-medium text-white" >Create New Account</a>
          </fieldset>
      `);
  }

  // Function to load the Sign Up form content
  function loadSignUpForm() {
      $('#form-content').html(`
          <fieldset>
              <h2 class="text-md text-medium text-white">
                  Sign up for 
                  <span class="bg-yellow p-1 rounded-3">
                      <img src="assets/images/Connect-Construction-logo.png" class="rounded-4" height="25px" alt="">
                  </span>
              </h2>
              <p class="text-sm text-medium text-white">Enter your details to create an account.</p>
              <div class="form-group">


               <div class="input-container">
            <input type="text" placeholder="Name">
            <i class="fa-regular fa-user user-icon"></i>
        </div>
                 

        <div class="input-container mt-3">
          <input type="text" placeholder="Phone Number">
          <i class="fa-solid fa-phone user-icon"></i>
      </div>
              </div>
              <div class="w-100">
              <button type="submit" class="auth-btn  text-xs text-regular text-gray py-3 w-100">
              SIGN UP
            </button>
              </div>
              <a href="#" id="switch-to-signin" class="text-sm text-medium text-white">Back To login</a>
          </fieldset>
      `);
  }
});


$(window).on('load', function() {
  $("#blog-carousel").owlCarousel({
    loop: true,
    autoWidth: true,  
    // items:3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    center: true,
    margin: 10,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
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



$(document).ready(function () {
  let items = [
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    { title: "Appliances", src: "assets/images/Catg-img.png" },
    // Add more items as needed
  ];

  let itemsLoaded = 0; // Start from 0

  $("#loadMore").on("click", function () {
    let content = "";
    for (
      let i = itemsLoaded;
      i < itemsLoaded + 4 && i < items.length;
      i++
    ) {
      let src = items[i].src;
      let title = items[i].title;

      content += `
           <div class="col-12 col-md-6 col-lg-3">
              <div class="category-card">
                  <div>
                      <div>
                          <img src="${src}" alt="" />
                      </div>
                      <div>
                          <span class="text-medium text-md">${title}</span>
                      </div>
                  </div>
              </div>
          </div>
      `;
    }

    $("#content").append(content);
    itemsLoaded += 4; // Increase by 4 each time

    if (itemsLoaded >= items.length) {
      $("#loadMore").hide(); // Hide the button if no more items to load
    }
  });
});





// /* From Uiverse.io by vinodjangid07 */ 
// <form class="otp-Form">
 
//  <span class="mainHeading">Enter OTP</span>
//  <p class="otpSubheading">We have sent a verification code to your mobile number</p>
//  <div class="inputContainer">
//   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1">
//   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2">
//   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3">
//   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4"> 
  
//  </div>
//   <button class="verifyButton" type="submit">Verify</button>
//     <button class="exitBtn">×</button>
//     <p class="resendNote">Didn't receive the code? <button class="resendBtn">Resend Code</button></p>
    
// </form>



