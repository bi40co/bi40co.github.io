document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('darkModeToggle');
    
    console.log("Dark mode script loaded");  // Debug log

    // Check if dark mode is stored in localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        console.log("Setting dark mode from localStorage");
        document.body.classList.add('dark-mode');
        toggleButton.textContent = "White Mode";
    }

    toggleButton.addEventListener('click', function() {
        console.log("Dark mode button clicked");
        document.body.classList.toggle('dark-mode');
        
        // Toggle the button text between Dark Mode and White Mode
        if (toggleButton.textContent === "Dark Mode") {
            console.log("Switching to White Mode");
            toggleButton.textContent = "White Mode";
            localStorage.setItem('dark-mode', 'true'); // Save dark mode state
        } else {
            console.log("Switching to Dark Mode");
            toggleButton.textContent = "Dark Mode";
            localStorage.setItem('dark-mode', 'false'); // Save light mode state
        }
    });
});
