document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const currentMode = localStorage.getItem("dark-mode") || "light";

    // Set the initial mode based on the stored preference
    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        toggleButton.textContent = "Dark Mode";
    }

    // Add event listener for the button
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll('h1, h2, p, figure, figcaption, a').forEach(el => {
            el.classList.toggle('dark-mode');
        });
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Save the current mode to localStorage
        const isDarkMode = document.body.classList.contains("dark-mode");
        if (isDarkMode) {
            localStorage.setItem("dark-mode", "dark");
            toggleButton.textContent = "Light Mode";
        } else {
            localStorage.setItem("dark-mode", "light");
            toggleButton.textContent = "Dark Mode";
        }
    });
});
