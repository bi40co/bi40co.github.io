const toggleButton = document.getElementById('darkModeToggle');
const currentMode = localStorage.getItem('theme');

// Check if the theme is already saved in localStorage and apply it
if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
  document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(el => {
    el.classList.add('dark-mode');
  });
  document.querySelector('.container').classList.add('dark-mode');
  document.querySelector('nav').classList.add('dark-mode');
  document.querySelector('footer').classList.add('dark-mode');
  toggleButton.textContent = "White Mode";
}

toggleButton.addEventListener('click', function () {
  // Toggle dark mode for body and main containers
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');
  document.querySelector('nav').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');

  // Toggle dark mode for headings, paragraphs, figure, and figcaption
  document.querySelectorAll('h1, h2, p, figure, figcaption').forEach(el => {
    el.classList.toggle('dark-mode');
  });

  // Change button text between Dark Mode and White Mode
  if (toggleButton.textContent.trim() === "Dark Mode") {
    toggleButton.textContent = "White Mode";
    localStorage.setItem('theme', 'dark'); // Save theme to localStorage
  } else {
    toggleButton.textContent = "Dark Mode";
    localStorage.setItem('theme', 'light'); // Save theme to localStorage
  }
});
