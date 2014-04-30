
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

        
// Quote Slider

document.getElementById("left").onclick=function() {
	
	
	
	
}
	
     
// Re-order feature gif for mobile

/*
$(window).bind("load resize", listenWidth);
			
	function listenWidth() {
				
		if($(window).width() < 900) {
					
			$(".image-dos").remove().insertBefore($(".text-dos"));
				
		}
				
		else {
					
			$(".image-dos").remove().insertAfter($(".text-dos"));
						
		}
	}
*/
	
}); //end document.ready	
	