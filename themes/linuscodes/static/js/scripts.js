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

   // Toggle Mobile Navigation
   $('nav.main .mobile-btn').click(function() {
      $('nav.main .sites').toggleClass('visible');
      $('.overlay').toggleClass('visible');
      $('nav.main .mobile-btn').toggleClass('toggled');
   })

   // Hide navigation when scrolling down and show it, when scrolling up
   if( $(window).width() >= 872 ) {
      var lastScrollTop = 0;
      $(window).scroll(function(event){
         var st = $(this).scrollTop();
         if (st > lastScrollTop){
            if (!$('nav').hasClass('down')) {
               $('nav').addClass('down');
            }
         } else {
            $('nav').removeClass('down');
         }
         
         lastScrollTop = st;
         
         if($(this).scrollTop() <= 0) {
            $('nav').removeClass('down');
         };
      });
   };
});

hljs.initHighlightingOnLoad();
