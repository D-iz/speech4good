$(document).ready(function(){$("#menu").click(function(){$("header ul").slideToggle(300)}),$("#tweetLink").tweetAction({text:"Learning about social media for #slpeeps",url:"http://appstore.com/speech4good",via:"speech4good",related:"speech4good"},function(){$("a.downloadButton").addClass("active").attr("href","ebook.pdf"),$(".tweet_btn").addClass("inactive")}),document.getElementById("left").onclick=function(){}});