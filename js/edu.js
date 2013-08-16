$(function() {

  $('div.learnBox').hover(function() {
    $(this).addClass('hover');
    $(this).find('div.label').css('color','#B5241A');
  },
  function() {
    $(this).removeClass('hover');
    $(this).find('div.label').css('color','#000');
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

