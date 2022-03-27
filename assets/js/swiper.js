// main-slide
var swiper = new Swiper(".mySwiper", {
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
});

// best-slide

var bestSwiper = new Swiper(".bestSwiper", {
   // 기본 setting

   // 방향 setting : vertical(수직), horizontal(수평)
   direction: "horizontal",
   // 한번에 보여지는 페이지 수
   slidesPerView: 3,
   // 그룹으로 묶을 수
   slidesPerGroup: 3,
   // 페이지들 사이의 간격
   spaceBetween: 10,
   // 드레그 기능
   debugger: false,
   // 마우스 휠 기능
   mousewheel: false,
   // 반복 기능
   loop: true,
   // 드래그 페이지 이동 기능
   allowTouchMove: false,

   // 자동 스크롤링
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },

   // 페이징 => 사용하지 않을 기능인 경우 HTML 요소 삭제 후 JS코드도 꼭 주석, 삭제 처리할 것! 여러 Slide 사용시 충돌 에러 발생 가능
   // pagination: {
   //    // 페이지 기능
   //    el: ".swiper-pagination",
   //    // 클릭 가능
   //    clickable: true,
   // },

   // 방향
   navigation: {
      // 다음 페이지
      nextEl: ".swiper-button-next",
      // 이전 페이지
      prevEl: ".swiper-button-prev",
   },
});
