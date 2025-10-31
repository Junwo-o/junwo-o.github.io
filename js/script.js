// Set the footer year automatically to the current calendar year.
document.addEventListener('DOMContentLoaded', function () {
	try {
		var current_year = document.getElementById('year');
		if (current_year) {
			current_year.textContent = new Date().getFullYear();
		}
	} catch (e) {
		// Fail silently
		console.error('Error setting footer year:', e);
	}
});
