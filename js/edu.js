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


  $('div.roasterSquare').hover(function() {
    $(this).addClass('hover');
  },
  function() {
    $(this).removeClass('hover');
  });

  	$('div.roasterSquare').click(function(){
  	window.location = $(this).attr("title");

  	});





});

