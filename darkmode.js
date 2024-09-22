document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const currentMode = localStorage.getItem('dark-mode') || 'light';

    if (currentMode === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
            el.classList.add('dark-mode');
        });
        localStorage.setItem('dark-mode', 'dark');
        toggleButton.textContent = "Light Mode";
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
            el.classList.remove('dark-mode');
        });
        localStorage.setItem('dark-mode', 'light');
        toggleButton.textContent = "Dark Mode";
    }
});
