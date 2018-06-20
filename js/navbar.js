document.addEventListener("DOMContentLoaded", function () {
	var navbar = document.querySelector("#nav");
	var toggle = function () {
		navbar.classList.toggle("toggled");
	}

	navbar.addEventListener("click", toggle);
});
