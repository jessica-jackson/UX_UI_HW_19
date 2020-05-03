// Wait for window load and loading gif
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//float in "better designs" and "better experience" headers
$(function(){
	//alert("Made it!");
		$('#float').css("margin-right", '20%').animate({
			"margin-right": "-=20%",
			opacity: 1
		}, 5000, 'swing');

		$('#float-left').css("margin-left", '20%').animate({
			"margin-left": "-=20%",
			opacity: 1
		}, 5000, 'swing');

});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//FFL load section divs on click
function changeInnerHtml(tab){
	switch(tab) {
		case 1:
				$('#fflContent').hide();
			$('#fflContentMission').show();
			break;
		case 2:
			$('#fflContentMission').hide();
			$('#fflContent').show();
			$('#fflContent').load("fflActions.html");
			break;
		case 3:
				$('#fflContentMission').hide();
				$('#fflContent').show();
			$('#fflContent').load("fflPlan.html");
			break;
		case 4:
				$('#fflContentMission').hide();
				$('#fflContent').show();
			$('#fflContent').load("fflNeeds.html");
			break;
		case 5:
				$('#fflContentMission').hide();
				$('#fflContent').show();
			$('#fflContent').load("fflLogistics.html");
			break;
		case 6:
				$('#fflContentMission').hide();
				$('#fflContent').show();
			$('#fflContent').load("fflCotillion.html");
			break;
		default:
				$('#fflContent').hide();
				$('#fflContentMission').show();
	}
}
