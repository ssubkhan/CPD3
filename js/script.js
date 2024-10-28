// Function to toggle modes
document.getElementById('normal-mode').addEventListener('click', function() {
    // Remove all modes and clear card styles
    document.body.classList.remove('dark-mode', 'high-contrast');
    toggleMode('normal'); // Clear card styles if using normal mode
});

document.getElementById('dark-mode').addEventListener('click', function() {
    setMode('dark');
    toggleMode('dark');
});

document.getElementById('high-contrast-mode').addEventListener('click', function() {
    setMode('high-contrast');
    toggleMode('high-contrast');
});

// Function to set mode on the body
function setMode(mode) {
    // Remove both dark mode and high contrast classes
    document.body.classList.remove('dark-mode', 'high-contrast');

    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (mode === 'high-contrast') {
        document.body.classList.add('high-contrast');
    }
}

// Function to toggle mode styles
function toggleMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (mode === 'high-contrast') {
        document.body.classList.add('high-contrast');
    }
}
