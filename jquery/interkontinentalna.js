$(document).ready(function(){
  $('.nextTajland').on('click', function(){
   	var currentImg = $('#middle .activeTajland');
   	var nextImg = currentImg.next();

   	if(nextImg.length){
      currentImg.removeClass('activeTajland').css('z-index', -10);
      nextImg.addClass('activeTajland').css('z-index', 10);
    }
  });


  $('.prevTajland').on('click', function(){
    var currentImg = $('#middle .activeTajland');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeTajland').css('z-index', -10);
      prevImg.addClass('activeTajland').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextHavana').on('click', function(){
    var currentImg = $('#middle .activeHavana');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeHavana').css('z-index', -10);
      nextImg.addClass('activeHavana').css('z-index', 10);
    }
  });


  $('.prevHavana').on('click', function(){
    var currentImg = $('#middle .activeHavana');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeHavana').css('z-index', -10);
      prevImg.addClass('activeHavana').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextBali').on('click', function(){
    var currentImg = $('#middle .activeBali');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeBali').css('z-index', -10);
      nextImg.addClass('activeBali').css('z-index', 10);
    }
  });


  $('.prevBali').on('click', function(){
    var currentImg = $('#middle .activeBali');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeBali').css('z-index', -10);
      prevImg.addClass('activeBali').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextDubai').on('click', function(){
    var currentImg = $('#middle .activeDubai');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeDubai').css('z-index', -10);
      nextImg.addClass('activeDubai').css('z-index', 10);
    }
  });


  $('.prevDubai').on('click', function(){
    var currentImg = $('#middle .activeDubai');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeDubai').css('z-index', -10);
      prevImg.addClass('activeDubai').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextMaldivi').on('click', function(){
    var currentImg = $('#middle .activeMaldivi');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeMaldivi').css('z-index', -10);
      nextImg.addClass('activeMaldivi').css('z-index', 10);
    }
  });


  $('.prevMaldivi').on('click', function(){
    var currentImg = $('#middle .activeMaldivi');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeMaldivi').css('z-index', -10);
      prevImg.addClass('activeMaldivi').css('z-index', 10);
    }

});
  });


$(document).ready(function(){
  $('.nextMaroko').on('click', function(){
    var currentImg = $('#middle .activeMaroko');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('activeMaroko').css('z-index', -10);
      nextImg.addClass('activeMaroko').css('z-index', 10);
    }
  });


  $('.prevMaroko').on('click', function(){
    var currentImg = $('#middle .activeMaroko');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('activeMaroko').css('z-index', -10);
      prevImg.addClass('activeMaroko').css('z-index', 10);
    }

});
  });