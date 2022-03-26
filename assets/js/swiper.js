// main-slide

const swiper = new Swiper(".swiper", {
   // 기본 setting

   // 방향 setting : vertical(수직), horizontal(수평)
   direction: "horizontal",
   // 한번에 보여지는 페이지 수
   slidesPerView: 1,
   // 페이지들 사이의 간격
   spaceBetween: 20,
   // 드레그 기능
   debugger: true,
   // 마우스 휠 기능
   mousewheel: true,
   // 반복 기능
   loop: true,

   // 자동 스크롤링
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },

   // 페이징
   pagination: {
      // 페이지 기능
      el: ".swiper-pagination",
      // 클릭 가능
      clickable: true,
   },

   // 방향
   navigation: {
      // 다음 페이지
      nextEl: ".swiper-button-next",
      // 이전 페이지
      prevEl: ".swiper-button-prev",
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: ".swiper-scrollbar",
   // },
});

// best-slide

const bestSwiper = new Swiper(".best-swiper", {
   // 기본 setting

   // 방향 setting : vertical(수직), horizontal(수평)
   direction: "horizontal",
   // 한번에 보여지는 페이지 수
   slidesPerView: 3,
   // 그룹으로 묶을 수
   slidesPerGroup: 3,
   // 페이지들 사이의 간격
   spaceBetween: 0,
   // 드레그 기능
   debugger: true,
   // 마우스 휠 기능
   mousewheel: true,
   // 반복 기능
   loop: true,

   // 자동 스크롤링
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },

   // 페이징
   pagination: {
      // 페이지 기능
      el: ".swiper-pagination",
      // 클릭 가능
      clickable: true,
   },

   // 방향
   navigation: {
      // 다음 페이지
      nextEl: ".swiper-button-next",
      // 이전 페이지
      prevEl: ".swiper-button-prev",
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: ".swiper-scrollbar",
   // },
});
