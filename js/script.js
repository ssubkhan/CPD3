// Store references to mode buttons
const modeButtons = document.querySelectorAll('[data-mode]');

// Set default mode based on localStorage
const currentMode = localStorage.getItem('mode') || 'normal';
setMode(currentMode);

// Add event listeners to buttons
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mode = button.getAttribute('data-mode');
        setMode(mode);
    });
});

// Function to set mode on the body
function setMode(mode) {
    // Remove all mode classes
    document.body.classList.remove('dark-mode', 'high-contrast');
    
    // Add the selected mode class
    if (mode !== 'normal') {
        document.body.classList.add(mode);
    }

    // Store the current mode in localStorage
    localStorage.setItem('mode', mode);
}
