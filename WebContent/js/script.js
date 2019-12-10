function validateForm() {
	var title = document.forms["myForm"]["title"].value;
	var price = document.forms["myForm"]["price"].value;
	var dateOfLaunch = document.forms["myForm"]["dateOfLaunch"].value;
	var category = document.forms["myForm"]["category"].value;
	if (title == "") {
		alert("Title is required.");
		return false;
	}
	else if (title.length < 2 || title.length > 65) {
		alert("Title should have 2 to 65 characters.");
		return false;
	}			
	else if (price == "") {
		alert("Price is required.");
		return false;
	}
	else if (isNaN(price)) {
		alert("Price has to be a number.");
		return false;
	}
	else if (dateOfLaunch == "") {
		alert("Date of Launch is required");
		return false;
	}			
	else if (category == "") {
		alert("Select one category");
		return false;
	}			
	else {
		return true;
	}
}