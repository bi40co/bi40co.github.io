document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Apply correct mode on page load based on localStorage
    function applyDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode'); // Enable dark mode
            toggleButton.textContent = "Light Mode"; // Change button to "White Mode"
        } else {
            body.classList.remove('dark-mode'); // Disable dark mode
            toggleButton.textContent = "Dark Mode"; // Change button to "Dark Mode"
        }
    }

    // Toggle dark mode when the button is clicked
    function toggleDarkMode() {
        body.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on the body

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = "Light Mode"; // Update button to "White Mode"
            localStorage.setItem('darkMode', 'enabled'); // Store mode in localStorage
        } else {
            toggleButton.textContent = "Dark Mode"; // Update button to "Dark Mode"
            localStorage.setItem('darkMode', 'disabled'); // Store mode in localStorage
        }
    }

    // Initialize the correct mode when the page loads
    applyDarkMode();

    // Set up the click event listener for the toggle button
    toggleButton.addEventListener('click', function () {
        toggleDarkMode(); // Call toggle function when the button is clicked
    });
});
