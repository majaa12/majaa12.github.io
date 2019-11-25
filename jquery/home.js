$('#havana').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "50%", height: "50%"}, 'slow');
});

$('#havana').mouseleave(function() {   
    $(this).animate({width: "28%"}, 'slow');
});