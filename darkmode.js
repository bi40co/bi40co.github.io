document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('darkModeToggle');
    
    // Check if dark mode is stored in localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = "White Mode";
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Toggle the button text between Dark Mode and White Mode
        if (toggleButton.textContent === "Dark Mode") {
            toggleButton.textContent = "White Mode";
            localStorage.setItem('dark-mode', 'true'); // Save dark mode state
        } else {
            toggleButton.textContent = "Dark Mode";
            localStorage.setItem('dark-mode', 'false'); // Save light mode state
        }
    });
});
