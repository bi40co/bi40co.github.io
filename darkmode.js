document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.addEventListener('click', function () {
        // Toggle dark mode for body and containers
        document.body.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Toggle dark mode for headings, paragraphs, figures, and figcaptions
        document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(function (el) {
            el.classList.toggle('dark-mode');
        });

        // Toggle button text between Dark Mode and Light Mode
        if (toggleButton.textContent.trim() === "Dark Mode") {
            toggleButton.textContent = "Light Mode";
        } else {
            toggleButton.textContent = "Dark Mode";
        }

        // Save mode to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check saved mode in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(function (el) {
            el.classList.add('dark-mode');
        });
        toggleButton.textContent = "Light Mode";
    }
});
