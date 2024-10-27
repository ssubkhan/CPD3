// script.js

// Function to toggle modes
document.getElementById('normal-mode').addEventListener('click', function() {
    document.body.classList.remove('dark-mode', 'high-contrast');
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('high-contrast-mode').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Add any additional JavaScript functions or code here
