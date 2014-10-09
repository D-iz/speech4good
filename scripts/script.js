
$(document).ready(function() {
// Navigation SlideDown/Up on Mobile
	$('#menu').click(function() {
		$('header ul').slideToggle(300);
	});
// Tweet to Download eBook
    $('#tweetLink').tweetAction({
        text:		'Learning about social media for #slpeeps',
        url:		'http://appstore.com/speech4good',
        via:		'speech4good',
        related:	'speech4good'
    },function() {
        // Callback function. Triggered when the user closes the pop-up window:
        $('a.downloadButton')
                .addClass('active')
                .attr('href','ebook.pdf');
        $('.tweet_btn').addClass('inactive');
    });

//Stuttering Awareness
   $(document).ready(function () {
  $("#isad-main-content").delay("100").css('opacity',0).animate({opacity:1}, 1000);
}); //end document.ready
}); //end document.ready