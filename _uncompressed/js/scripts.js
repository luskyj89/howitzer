
function init(){
    console.log("init");

    $(".main").onepage_scroll({
        loop: false,
        pagination: false,
        beforeMove: function(index) {
            $("#logo").animate({ opacity: .5 },800);
            $(".entry-info").animate({ opacity: 0 },300);
        },
        afterMove: function(index) {
            $(".entry-info").animate({ opacity: 1 },400);
        }
    });

    $("#logo")
        .fadeIn(1000)
        .hover(function(){
        $("#logo").animate({ opacity: 1 },500);
    }, function(){
        $("#logo").stop(true, false).animate({ opacity: .5 },500);
    });

}


$(document).ready(function(){
    init();
});
