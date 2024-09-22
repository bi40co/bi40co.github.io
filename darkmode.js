const toggleButton = document.getElementById('darkModeToggle');

// Function to toggle dark mode and save state in localStorage
toggleButton.addEventListener('click', function () {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    document.querySelectorAll('h1, h2, p, a').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    if (isDarkMode) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Check saved theme in localStorage and apply it on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('h1, h2, p, a').forEach(el => {
        el.classList.add('dark-mode');
    });
    toggleButton.textContent = 'Light Mode';
} else {
    toggleButton.textContent = 'Dark Mode';
}
