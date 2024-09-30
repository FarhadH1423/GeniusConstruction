(function ($) {
  /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Nice Select
        6. Mobile Menu
        7. Wow Js
        8. Article Hover
        9. Offcanvus
        10. Progressbar
        11. Preloader
        12. Header Sticky
        13. Counter Up
        14. Case Study Hover Function
        15. Magnific Popup
        16. Canvus Menu Toggle
        17. Canvus Menu
    */

  //1. Data Background Set
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  $(".counterr").counterUp({
    delay: 10,
    time: 1000,
  });

  //12. header sticky
  $(window).on("scroll", function () {
    var scrollbarPosition = $(this).scrollTop();

    if (scrollbarPosition > 150) {
      $(".header-sticky").addClass("sticky-on");
    } else {
      $(".header-sticky").removeClass("sticky-on");
    }
  });

  //2. Scroll top button
  $(window).on("scroll", function () {
    var scrollBar = $(this).scrollTop();
    if (scrollBar > 150) {
      $(".scroll-top-btn").fadeIn();
    } else {
      $(".scroll-top-btn").fadeOut();
    }
  });
  $(".scroll-top-btn").on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });

  //3. Offcanvus toggle
  $(".offcanvus-toggle").on("click", function () {
    $(".offcanvus-box").addClass("active");
  });

  $(".offcanvus-close").on("click", function () {
    $(".offcanvus-box").removeClass("active");
  });

  $(document).on("mouseup", function (e) {
    var offCanvusMenu = $(".offcanvus-box");

    if (
      !offCanvusMenu.is(e.target) &&
      offCanvusMenu.has(e.target).length === 0
    ) {
      $(".offcanvus-box").removeClass("active");
    }
  });

  //4. Theme Slider Functions
  $(".feedback-sliderr").slick({
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    speed: 700,
    infinity: true,
    padding: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".gateways-slider-raw").slick({
    slidesToShow: 6,
    autoplay: true,
    speed: 500,
    infinity: true,
    padding: 20,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          padding: 0,
        },
      },
    ],
  });

  $(".gateways-sliderr").slick({
    slidesToShow: 6,
    autoplay: true,
    speed: 500,
    infinity: true,
    padding: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".testi-slider-wrapper-home-2").slick({
    slidesToShow: 1,
    autoplay: false,
    speed: 2000,
    arrows: true,
    padding: "20px",
    dots: false,
    variableWidth: false,
    pauseOnHover: false,
    prevArrow: `<button class="prev-btn slider-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M25.3333 14.6667H12L16.3867 10.2801C16.5116 10.1561 16.6108 10.0087 16.6785 9.84618C16.7462 9.6837 16.7811 9.50943 16.7811 9.33341C16.7811 9.1574 16.7462 8.98312 16.6785 8.82064C16.6108 8.65816 16.5116 8.5107 16.3867 8.38675C16.1368 8.13841 15.7989 7.99902 15.4467 7.99902C15.0944 7.99902 14.7565 8.13841 14.5067 8.38675L8.78667 14.1201C8.28588 14.6179 8.00298 15.294 8 16.0001C8.00649 16.7015 8.28913 17.3722 8.78667 17.8667L14.5067 23.6001C14.631 23.7235 14.7784 23.8213 14.9405 23.8877C15.1026 23.9542 15.2762 23.9881 15.4514 23.9875C15.6266 23.9869 15.7999 23.9517 15.9615 23.8841C16.1232 23.8165 16.2699 23.7177 16.3933 23.5934C16.5168 23.4691 16.6145 23.3217 16.681 23.1596C16.7475 22.9975 16.7814 22.8239 16.7807 22.6487C16.7801 22.4735 16.745 22.3001 16.6774 22.1385C16.6098 21.9769 16.511 21.8302 16.3867 21.7067L12 17.3334H25.3333C25.687 17.3334 26.0261 17.1929 26.2761 16.9429C26.5262 16.6928 26.6667 16.3537 26.6667 16.0001C26.6667 15.6464 26.5262 15.3073 26.2761 15.0573C26.0261 14.8072 25.687 14.6667 25.3333 14.6667Z" fill="#295BFF"/>
</svg>
    </button>`,
    nextArrow: `<button class="next-btn  slider-btn">
    
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24.0002 16.0004C23.9937 15.2989 23.711 14.6283 23.2135 14.1337L17.4935 8.40042C17.2437 8.15208 16.9057 8.0127 16.5535 8.0127C16.2012 8.0127 15.8633 8.15208 15.6135 8.40042C15.4885 8.52437 15.3893 8.67184 15.3216 8.83432C15.254 8.99679 15.2191 9.17107 15.2191 9.34708C15.2191 9.5231 15.254 9.69737 15.3216 9.85985C15.3893 10.0223 15.4885 10.1698 15.6135 10.2937L20.0002 14.6671H6.66683C6.31321 14.6671 5.97407 14.8076 5.72402 15.0576C5.47397 15.3077 5.3335 15.6468 5.3335 16.0004C5.3335 16.354 5.47397 16.6932 5.72402 16.9432C5.97407 17.1933 6.31321 17.3337 6.66683 17.3337H20.0002L15.6135 21.7204C15.3624 21.9697 15.2207 22.3085 15.2194 22.6624C15.2182 23.0162 15.3575 23.356 15.6068 23.6071C15.8561 23.8581 16.195 23.9999 16.5488 24.0011C16.9026 24.0024 17.2424 23.863 17.4935 23.6137L23.2135 17.8804C23.7143 17.3826 23.9972 16.7065 24.0002 16.0004Z" fill="#295BFF"/>
</svg>
    </button>`,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          // variableWidth: false,
          // autoplay: true,
          Infinity: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // variableWidth: false,
          // autoplay: true,
          Infinity: true,
          arrows: true,
        },
      },
    ],
  });

  //feedback slider 2
  $(".cr2-feedback-slider").slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    autoplay: true,
    speed: 700,
    verticalSwiping: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
        },
      },
    ],
  });
  //hm4 feedback slider
  $(".hm4-feedback-slider").slick({
    slidesToShow: 2,
    prevArrow:
      '<button class="prev-btn"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 1.1875L1.06641 19.2227C0.75 19.5391 0.75 20.0664 1.06641 20.3828L18.9961 38.418C19.418 38.7344 19.9453 38.7344 20.2617 38.418C20.5781 38.1016 20.5781 37.4688 20.2617 37.1523L3.70312 20.6992H47.1562C47.6836 20.6992 48 20.2773 48 19.75C48 19.3281 47.6836 18.9062 47.1562 18.9062H3.70312L20.2617 2.45312C20.5781 2.13672 20.5781 1.50391 20.2617 1.1875C19.9453 0.871094 19.3125 0.871094 18.9961 1.1875Z" /></svg></button>',
    nextArrow:
      '<button class="next-btn"><svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0039 1.1875L46.9336 19.2227C47.25 19.5391 47.25 20.0664 46.9336 20.3828L29.0039 38.418C28.582 38.7344 28.0547 38.7344 27.7383 38.418C27.4219 38.1016 27.4219 37.4688 27.7383 37.1523L44.2969 20.6992H0.84375C0.316406 20.6992 0 20.2773 0 19.75C0 19.3281 0.316406 18.9062 0.84375 18.9062H44.2969L27.7383 2.45312C27.4219 2.13672 27.4219 1.50391 27.7383 1.1875C28.0547 0.871094 28.6875 0.871094 29.0039 1.1875Z" /></svg></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //5. Nice Select
  $(".nice_select").niceSelect();

  //6. Mobile Menu
  $(".mobile-menu-toggle").on("click", function () {
    $(".mobile-menu").addClass("active");
  });

  $(".mobile-menu .close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });

  // $(".mobile-menu ul li.has-submenu i").each(function () {
  //     $(this).on("click", function () {
  //     $(this).siblings('ul').slideToggle();
  //     $(this).toggleClass("icon-rotate");
  //     });
  // });

  // $(document).on("mouseup", function (e) {
  //     var offCanvusMenu = $(".mobile-menu");

  //     if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
  //         $(".mobile-menu").removeClass("active");
  //     }
  // });

  //7. wow js
  new WOW().init();
})(jQuery);
