/**
 * COS30045 - Data Visualisation
 * Exercise 0.2: Energy Data Webpage Navigation
 * Logic for swapping "pages" and providing user feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all navigation items, the content sections, and the logo
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-content');
    const logo = document.getElementById('logo-home');

    /**
     * Function to handle switching between pages
     * @param {string} pageId - The ID of the section to display
     */
    function navigateTo(pageId) {
        // A. Hide every section first
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // B. Show only the section that matches the clicked ID
        const targetSection = document.getElementById(pageId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // C. Update the "active" state in the navigation menu
        updateActiveLink(pageId);
    }

    /**
     * Updates the CSS class of the navigation links for user feedback
     */
    function updateActiveLink(activePageId) {
        navLinks.forEach(link => {
            // Remove 'active' from everyone
            link.classList.remove('active');
            
            // Add 'active' only to the link that matches the current page
            if (link.getAttribute('data-page') === activePageId) {
                link.classList.add('active');
            }
        });
    }

    // 2. Add Click Listeners to Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the page from refreshing/jumping
            const selectedPage = link.getAttribute('data-page');
            navigateTo(selectedPage);
        });
    });

    // 3. Add Click Listener to the Logo (Returns to Home)
    logo.addEventListener('click', () => {
        navigateTo('home');
    });
});