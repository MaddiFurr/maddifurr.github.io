// Mobile sidebar dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    const sidebar = document.querySelector('.page__aside-left');
    if (!sidebar) return;

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'mobile-menu-toggle';
    toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
    toggleButton.setAttribute('aria-label', 'Toggle sidebar menu');
    toggleButton.setAttribute('aria-expanded', 'false');

    // Create wrapper for mobile menu
    const mobileMenuWrapper = document.createElement('div');
    mobileMenuWrapper.className = 'mobile-menu-wrapper';
    
    // Move toggle button before sidebar
    sidebar.parentNode.insertBefore(mobileMenuWrapper, sidebar);
    mobileMenuWrapper.appendChild(toggleButton);
    mobileMenuWrapper.appendChild(sidebar);

    // Add click event to toggle button
    toggleButton.addEventListener('click', function() {
        const isExpanded = sidebar.classList.contains('mobile-menu-expanded');
        
        if (isExpanded) {
            sidebar.classList.remove('mobile-menu-expanded');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
        } else {
            sidebar.classList.add('mobile-menu-expanded');
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.innerHTML = '<i class="fa-solid fa-times"></i> Close';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenuWrapper.contains(event.target);
        const isMenuExpanded = sidebar.classList.contains('mobile-menu-expanded');
        
        if (!isClickInsideMenu && isMenuExpanded) {
            sidebar.classList.remove('mobile-menu-expanded');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
        }
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('mobile-menu-expanded');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
        }
    });
});
