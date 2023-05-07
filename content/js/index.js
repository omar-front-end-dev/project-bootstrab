          // swiper element
            const swiperEl = document.querySelector('swiper-container');
          
            // swiper parameters
            const swiperParams = {
              slidesPerView: 1,
              breakpoints: {
                200: {
                  slidesPerView: 1.2,
                },
                640: {
                  slidesPerView: 2.2,
                },
                991: {
                  slidesPerView: 3.7,
                },
              },
              on: {
                init() {
                  // ...
                },
              },
            };
          
            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);
          
            // and now initialize it
            swiperEl.initialize();