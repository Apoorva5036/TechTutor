// Function to show the corresponding section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('main section');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Optional: Call showSection('home') when the page loads to show the "Home" section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
