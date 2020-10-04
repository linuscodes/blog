jQuery(function ($) {
   
   $('.js-jump-top').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({ 'scrollTop': 0 }, 1000, $.bez([0.770, 0, 0.175, 1]));
   });

   $('.scroll-to-content').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({ 'scrollTop': ($('#content').offset().top - 70) }, 800, $.bez([0.770, 0, 0.175, 1]))
   });

   $(document).scroll(function() {
      if($(window).scrollTop() >= 150) {
         $('.btn.scroll-to-content').addClass('hide');
      } else {
         $('.btn.scroll-to-content').removeClass('hide');
      }
   })

   $(document).ready(function() {
      $('.post-content a').attr('target', '_blank');
   });

   for (let i = 0; i <= (document.getElementsByClassName('category-link').length - 1); i++) {
      var newCategoryName = document.getElementsByClassName('category-link')[i].textContent.toString().replace(/-/g, " ");

      document.getElementsByClassName('category-link')[i].textContent = newCategoryName;
   }
});
