document.addEventListener('DOMContentLoaded', function () {
    // Ensure the button is present
    const toggleButton = document.getElementById('darkModeToggle');

    if (toggleButton) {
        // Toggle dark mode on button click
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.container').classList.toggle('dark-mode');
            document.querySelector('nav')?.classList.toggle('dark-mode');
            document.querySelector('footer')?.classList.toggle('dark-mode');

            // Toggle dark mode for headings, paragraphs, figures, and figcaptions
            document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(function (el) {
                el.classList.toggle('dark-mode');
            });

            // Change button text between Dark Mode and Light Mode
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

        // Check saved mode in localStorage and apply on page load
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            document.querySelector('.container')?.classList.add('dark-mode');
            document.querySelector('nav')?.classList.add('dark-mode');
            document.querySelector('footer')?.classList.add('dark-mode');
            document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(function (el) {
                el.classList.add('dark-mode');
            });
            toggleButton.textContent = "Light Mode";
        }
    } else {
        console.error("Dark mode button not found!");
    }
});
