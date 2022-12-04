$(document).ready(function(){
	$("#hero-title").fadeIn(1500);

	//shop functionality
	$(".product-reveal").hover(function(){
		$(this).css("cursor", "pointer");
	});
	$("#pt-plan-1").click(function(){
		$("#pt-plan-1-features").toggle();
	});
	$("#pt-plan-2").click(function(){
		$("#pt-plan-2-features").toggle();
	});
	$("#nutri-plan").click(function(){
		$("#nutri-plan-features").toggle();
	});
	$("#golf-plan").click(function(){
		$("#golf-plan-features").toggle();
	});


	//about page
	$(".about-img").fadeIn(1000);
	$(".about-quote").fadeIn(2000);
	$(".about-text").fadeIn(3500);

	//Form validation for required elements
	$("#contact-form").submit(function() {
		var error_count = 0;

		if (!validate("name"))
		{
			error_count += 1;
		}
		if (!validate("email"))
		{
			error_count += 1;
		}
		if (!validate("phone"))
		{
			error_count += 1;
		}

		if (error_count > 0){
			$("span#error-count").text(error_count);
			$("p#error-list").fadeIn(1000);
			event.preventDefault();
			return false;
		}				
	});

	function validate(elementName){
		var elementValue = $("#customer-"+ elementName).val();
		var error = $("#"+ elementName +"-error");

		if(elementValue == "" || elementValue.charAt(0) == " "){
			error.text("*Please enter valid "+ elementName);
			return false;
		}
		else{
			error.text("");
		}

		//element specific validations
		if(elementName == "name"){
			var validPattern = /^[a-z ,.'-]+$/i.test(elementValue);
			if(!validPattern){
				error.text("*Please enter valid name format");
				return false;
			}
		}
		if(elementName == "email"){
			var validPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elementValue);
			if (!validPattern){
				error.text("*Please enter valid email format");
				return false;
			}
		}	
		
		if(elementName == "phone"){
			var validPattern = /^\d{10}$/.test(elementValue);
			if (!validPattern){
				error.text("*Please enter valid phone format");
				return false;
			}
		}
		
		return true;
	}
});
