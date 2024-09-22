document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const currentMode = localStorage.getItem('darkMode') || 'light';

    // Apply saved theme on page load
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }

    // Toggle theme when button is clicked
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Apply dark mode to other elements
        document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
            el.classList.toggle('dark-mode');
        });

        // Switch button text and save preference
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('darkMode', 'dark');
        } else {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('darkMode', 'light');
        }
    });
});
