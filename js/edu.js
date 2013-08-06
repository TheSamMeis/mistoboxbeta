$(function() {

  $('div.learnBox').hover(function() {
    $(this).addClass('hover');
  },
  function() {
    $(this).removeClass('hover');
  });

  	$('div.learnBox').click(function(){
  		window.location = $(this).attr("title");

  	});



});

