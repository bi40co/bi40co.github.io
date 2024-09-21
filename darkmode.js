document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Apply correct mode on page load based on localStorage
    function applyDarkMode() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode'); // Enable dark mode
            toggleButton.textContent = "Light Mode"; // Change button to "Light Mode"
            toggleInnerElements('dark-mode'); // Apply to all inner elements
        } else {
            body.classList.remove('dark-mode'); // Disable dark mode
            toggleButton.textContent = "Dark Mode"; // Change button to "Dark Mode"
            toggleInnerElements(''); // Remove dark-mode class from all inner elements
        }
    }

    // Toggle dark mode when the button is clicked
    function toggleDarkMode() {
        body.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on the body
        toggleInnerElements(body.classList.contains('dark-mode') ? 'dark-mode' : ''); // Update inner elements

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = "Light Mode"; // Update button to "Light Mode"
            localStorage.setItem('darkMode', 'enabled'); // Store mode in localStorage
        } else {
            toggleButton.textContent = "Dark Mode"; // Update button to "Dark Mode"
            localStorage.setItem('darkMode', 'disabled'); // Store mode in localStorage
        }
    }

    // Function to toggle dark mode on inner elements
    function toggleInnerElements(modeClass) {
        document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(el => {
            if (modeClass) {
                el.classList.add(modeClass);
            } else {
                el.classList.remove('dark-mode');
            }
        });
    }

    // Initialize the correct mode when the page loads
    applyDarkMode();

    // Set up the click event listener for the toggle button
    toggleButton.addEventListener('click', function () {
        toggleDarkMode(); // Call toggle function when the button is clicked
    });
});
