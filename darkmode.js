// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');

    // Check if dark mode is saved in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
        applyDarkMode();
        toggleButton.textContent = "White Mode"; // Set button text accordingly
    } else {
        toggleButton.textContent = "Dark Mode";
    }

    // Event listener for the Dark Mode/White Mode toggle button
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Apply dark mode to headings, paragraphs, and links
        document.querySelectorAll('h1, h2, p, a').forEach(el => {
            el.classList.toggle('dark-mode');
        });

        // Toggle button text between Dark Mode and White Mode
        if (toggleButton.textContent.trim() === "Dark Mode") {
            toggleButton.textContent = "White Mode";
        } else {
            toggleButton.textContent = "Dark Mode";
        }

        // Save the current mode in localStorage
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('darkMode', currentMode);
    });

    // Function to apply dark mode classes
    function applyDarkMode() {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');

        // Apply dark mode to headings, paragraphs, and links
        document.querySelectorAll('h1, h2, p, a').forEach(el => {
            el.classList.add('dark-mode');
        });
    }
});
