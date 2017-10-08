$(document).ready(function() {
	console.log("JavaScript works!");
	var isDropdown = false;

	$("#dropbtn").click(function() {
		console.log("Picture Clicked!");
		var dropdownContent = document.getElementById('dropdown-content');
		if(isDropdown) {
			dropdownContent.style.display = "none";
			isDropdown = false;
		}
		else {
			dropdownContent.style.display = "block";
			isDropdown = true;
		}
	});

});