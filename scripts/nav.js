/*
Project Name: Kitty Likes Avacado
Author Name: Premium Design Works
Author URI: http://www.premiumdw.com/
*/

$(window).load(function() { // when the window loads...
	
	$("#navigation-toggle").click(function() { // when the toggle is clicked...
		
		$("#navigation").toggleClass("opened");
		$("#navigation-toggle").toggleClass("opened");
		$("#content").toggleClass("opened");
		$("#navigation-items-top").toggle();
		$("#navigation-items-bottom").toggle();
		
		if ($("#navigation-toggle").hasClass("flaticon-menu48")) {
			
			$("#navigation-toggle").removeClass("flaticon-menu48").addClass("flaticon-cancel30");
			
		} else {
			
			$("#navigation-toggle").removeClass("flaticon-cancel30").addClass("flaticon-menu48");
			
		}
		
	});

}); // end window load