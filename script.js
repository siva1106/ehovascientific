// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get the menu button and the navigation menu from the HTML
    const menuBtn = document.getElementById('menu-btn');
    const mainNav = document.getElementById('main-nav');

    // Add a click event listener to the hamburger button
    menuBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation menu
        // (In our CSS, .main-nav.active changes display from 'none' to 'flex')
        mainNav.classList.toggle('active');
        
        // Optional: Change the button text from ☰ to ✕ when open
        if (mainNav.classList.contains('active')) {
            menuBtn.innerHTML = '✕';
        } else {
            menuBtn.innerHTML = '☰';
        }
    });

    // Good UX: Close the mobile menu when a link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuBtn.innerHTML = '☰';
        });
    });

});