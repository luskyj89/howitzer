

function closeNav() {
    $("nav").removeClass("active");
    $("#hamburger").removeClass("active");
}


function init() {
    console.log("init");

    $(".main").onepage_scroll({
        loop: false,
        pagination: false,
        beforeMove: function(index) {
            $("#logo").animate({ opacity: .5 },800);
            $(".entry-info").animate({ opacity: 0 },300);
            $.fancybox.close( true );
            closeNav();
        },
        afterMove: function(index) {
            $(".entry-info").animate({ opacity: 1 },400);
        }
    });

    $("#hamburger").click(function() {
        $("#hamburger").toggleClass("active");
        $("nav").toggleClass("active");
    });

    $("#logo")
        .fadeIn(1000)
        .hover(function(){
        $("#logo").animate({ opacity: 1 },500);
    }, function(){
        $("#logo").stop(true, false).animate({ opacity: .5 },500);
    });

    $(".entry").click(function(){
        closeNav();
    });

}


$(document).ready(function() {
    init();

    $(".video").fitVids();

	$(".fancybox-thumb").fancybox({
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

});
