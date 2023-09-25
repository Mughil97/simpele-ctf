// themeToggle.js

function toggleTheme() {
    var body = document.body;
    var button = document.getElementById('theme-toggle');

    // Toggle the 'dark-theme' class on the body
    body.classList.toggle('dark-theme');

    // Check if the body has the 'dark-theme' class
    if (body.classList.contains('dark-theme')) {
        button.textContent = '🌙';
    } else {
        button.textContent = '🌞';
    }
}
