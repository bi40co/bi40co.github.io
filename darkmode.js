document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    
    // If the button is found
    if (toggleButton) {
        // Check localStorage for saved dark mode preference
        const currentMode = localStorage.getItem('darkMode');
        if (currentMode === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            toggleButton.textContent = 'Dark Mode';
        }

        // Add click event listener to toggle button
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
                el.classList.toggle('dark-mode');
            });

            if (document.body.classList.contains('dark-mode')) {
                toggleButton.textContent = 'Light Mode';
                localStorage.setItem('darkMode', 'dark');
            } else {
                toggleButton.textContent = 'Dark Mode';
                localStorage.setItem('darkMode', 'light');
            }
        });
    } else {
        console.error('Dark Mode Toggle button not found!');
    }
});
