$(function() {
   $('#workButtons div').hover(function() {
     $('.workContent div').hide();
     $('.workContent div.' + this.id).show();
   });


	$('.workit').mouseover(function() {

			       $('.showinfo').removeClass('showinfo');
			       $(this).addClass('showinfo');

			   

		    	});
});