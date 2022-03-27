$(function () {
   $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, 1);
   });

   $(window).scroll(function () {
      if ($(document).scrollTop() > 1850) {
         $("#back-to-top").addClass("show");
      } else {
         $("#back-to-top").removeClass("show");
      }
   });
});
