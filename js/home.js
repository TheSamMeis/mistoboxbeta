$(function() {
   $('#workButtons div').hover(function() {
     $('.workContent div').hide();
     $('.workContent div.' + this.id).show();
   });
});
