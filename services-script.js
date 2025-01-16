

// });
$(document).ready(function () {

    // navbar
    // Select the hamburger menu and the navbar widget
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarWidget = document.querySelector('.navbar-widget-small');
    
    // Add a click event to toggle the navbar visibility
    hamburgerMenu.addEventListener('click', () => {
        navbarWidget.classList.toggle('show');
    });
    
      // scroll animation
      new WOW().init();
    // =====================================================SWIPER ANIMATION FOR WHAT WE DO ===========================
    // SLIDER
    var carouselslider = new Swiper('.carousel-slider', {
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination3',
          type: 'progressbar',
        },
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      });
    
        var swiper = new Swiper(".swiper-container-h", {
          speed: 1500,
          autoplay: {
            delay: 5000
          },
          parallax: true,
          mousewheel: false,
          loop: true,
      
          on: {
            init: function () {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                  .find(".slide-bg ")
                  .attr({
                    "data-swiper-parallax": 0.75 * swiper.width
                  });
              }
            },
            resize: function () {
              this.update();
            }
          },
      
          pagination: {
            el: ".creative-showcase--slider .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '">' +
                '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                'stroke-opacity="1" stroke-width="1px"></circle>' +
                '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                "</svg></span>"
              );
            }
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
    
    
     
    
     
    
      });
      