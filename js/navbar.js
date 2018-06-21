document.addEventListener("DOMContentLoaded", function () {
	// Get a reference to the navigation bar
	var navbar = document.getElementsByTagName("nav")[0];

	navbar.addEventListener("click", function () {
		this.classList.toggle("opened");
	});
})
