const toggleButton = document.getElementById('darkModeToggle');

// Check for saved dark mode preference
const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode for headings, paragraphs, figure, figcaption, and links
    document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    // Change button text between Dark Mode and Light Mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'dark');  // Save preference
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'light');  // Save preference
    }
});
