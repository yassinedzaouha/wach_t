$(function(){
    $("#readersnepal").on({
        mouseover: function(){
        $(this).css({
            left: (Math.random()*1000)+"px",
            top: (Math.random()*400)+"px",
        });
        }
    });
});


