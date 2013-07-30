$(function() {
   var lastScroll = null;
   var timeoutId = null;
   function update() {
     var scrollTop = $(document.body).scrollTop();
     var headerHeight = $('div.scrollaway').height();
     var targetPosition = Math.max(-(headerHeight), -scrollTop);
     $('.site-header').css('top', targetPosition + 'px');
     timeoutId = null;
   }
   $(window).scroll(function() {
     if (!lastScroll || (Date.now() - lastScroll) > 30) {
       update();
       lastScroll = Date.now();
    } else {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      lastScroll = Date.now();
      timeoutId = setTimeout(update, 150);
    }
   });
   update();
});
