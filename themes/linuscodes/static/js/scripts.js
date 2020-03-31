jQuery(function ($) {

   /* ============================================================ */
   /* Responsive Videos */
   /* ============================================================ */

   $(".post-content").fitVids();

   /* ============================================================ */
   /* Scroll To Top */
   /* ============================================================ */

   $('.js-jump-top').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({ 'scrollTop': 0 });
   });

   $('.scroll-to-content').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({ 'scrollTop': ($('#content').offset().top - 70) })
   });

   // Toggle Mobile Navigation
   $('nav.main .mobile-btn').click(function() {
      $('nav.main .sites').toggleClass('visible');
      $('.overlay').toggleClass('visible');
      $('nav.main .mobile-btn').toggleClass('toggled');
   })

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
   
   function checkForTwoColumnLayout() {
      var listOfImages = $('p img');
      
      if( listOfImages.length >= 2 ) {
         $(listOfImages).addClass('two-column-image');

         document.getElementsByClassName('two-column-image')[0].parentElement.classList.add('layout', 'col-2');
      }
   }
   checkForTwoColumnLayout();
});

hljs.initHighlightingOnLoad();
