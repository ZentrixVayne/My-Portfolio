// ====== MOBILE SPECIFIC FUNCTIONALITY ======

// Touch-optimized navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add touch-friendly interactions
    const touchElements = document.querySelectorAll('.btn, .project-card, .skill-card, .social-link');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Simplified scroll animations for mobile
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.stat-card, .project-card, .skill-card, .timeline-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    const elements = document.querySelectorAll('.stat-card, .project-card, .skill-card, .timeline-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on load
    animateOnScroll();
    
    // Swipe gestures for project carousel (if implemented)
    let touchStartX = 0;
    let touchEndX = 0;
    
    const projectContainer = document.querySelector('.projects-grid');
    if (projectContainer) {
        projectContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        projectContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swiped left
                console.log('Swiped left');
            }
            
            if (touchEndX > touchStartX + 50) {
                // Swiped right
                console.log('Swiped right');
            }
        }
    }
});

// Optimized performance for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Reduce animations on low-end devices
    const reduceAnimations = function() {
        const style = document.createElement('style');
        style.innerHTML = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    };
    
    // Check if device is low-end
    const navigatorConnection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (navigatorConnection) {
        if (navigatorConnection.saveData || navigatorConnection.effectiveType === 'slow-2g' || navigatorConnection.effectiveType === '2g') {
            reduceAnimations();
        }
    }
});