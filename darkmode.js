// Get the toggle button element
const toggleButton = document.getElementById('darkModeToggle');

// Check the current mode from localStorage
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Function to apply dark mode or light mode based on the current state
function applyMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(el => {
            el.classList.add('dark-mode');
        });
        document.querySelectorAll('a').forEach(el => {
            el.classList.add('dark-mode');
        });
        toggleButton.textContent = 'Light Mode'; // Change button text to Light Mode
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(el => {
            el.classList.remove('dark-mode');
        });
        document.querySelectorAll('a').forEach(el => {
            el.classList.remove('dark-mode');
        });
        toggleButton.textContent = 'Dark Mode'; // Change button text to Dark Mode
    }
}

// Apply the initial mode when the page loads
applyMode();

// Toggle dark mode on button click
toggleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode; // Toggle the dark mode state
    localStorage.setItem('isDarkMode', isDarkMode); // Save the state to localStorage
    applyMode(); // Apply the mode based on the updated state
});
