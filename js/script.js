$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

// Toggle the visibility of the paragraph when a button is clicked 
$(document).ready(function() {
	$("button").click(function(){
		$(this).prev().slideToggle('slow');  // can also use .next()
	});
	
// Opens the paragraph once the image element is clicked
$(document).ready(function() {
   $("img").click(function(){
   	    $(this).next().children("p").slideDown();
   });
});
   $(".card").click(function() {
		$(this).toggleClass("highlight");	 
	});
});

// All cards that are not currently selected will be hidden when `select_btn` is clicked
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
});