$(document).ready(function(){
  $('.nextLisabon').on('click', function(){
    var currentImg = $('#middle .activeLisabon');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeLisabon').css('z-index', -10);
      nextImg.addClass('activeLisabon').css('z-index', 10);
    }
  });


  $('.prevLisabon').on('click', function(){
    var currentImg = $('#middle .activeLisabon');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeLisabon').css('z-index', -10);
      prevImg.addClass('activeLisabon').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextMadrid').on('click', function(){
   	var currentImg = $('#middle .activeMadrid');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activeMadrid').css('z-index', -10);
      nextImg.addClass('activeMadrid').css('z-index', 10);
    }
  });


  $('.prevMadrid').on('click', function(){
    var currentImg = $('#middle .activeMadrid');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeMadrid').css('z-index', -10);
      prevImg.addClass('activeMadrid').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextRim').on('click', function(){
   	var currentImg = $('#middle .activeRim');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activeRim').css('z-index', -10);
      nextImg.addClass('activeRim').css('z-index', 10);
    }
  });


  $('.prevRim').on('click', function(){
    var currentImg = $('#middle .activeRim');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeRim').css('z-index', -10);
      prevImg.addClass('activeRim').css('z-index', 10);
    }

});
  });



$(document).ready(function(){
  $('.nextMoskva').on('click', function(){
   	var currentImg = $('#middle .activeMoskva');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activeMoskva').css('z-index', -10);
      nextImg.addClass('activeMoskva').css('z-index', 10);
    }
  });


  $('.prevMoskva').on('click', function(){
    var currentImg = $('#middle .activeMoskva');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeMoskva').css('z-index', -10);
      prevImg.addClass('activeMoskva').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextPariz').on('click', function(){
   	var currentImg = $('#middle .activePariz');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activePariz').css('z-index', -10);
      nextImg.addClass('activePariz').css('z-index', 10);
    }
  });


  $('.prevPariz').on('click', function(){
    var currentImg = $('#middle .activePariz');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activePariz').css('z-index', -10);
      prevImg.addClass('activePariz').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextAmsterdam').on('click', function(){
   	var currentImg = $('#middle .activeAmsterdam');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activeAmsterdam').css('z-index', -10);
      nextImg.addClass('activeAmsterdam').css('z-index', 10);
    }
  });


  $('.prevAmsterdam').on('click', function(){
    var currentImg = $('#middle .activeAmsterdam');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeAmsterdam').css('z-index', -10);
      prevImg.addClass('activeAmsterdam').css('z-index', 10);
    }

});
  });