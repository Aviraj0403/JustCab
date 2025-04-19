// Animation utilities and effects for the JustCab website
document.addEventListener('DOMContentLoaded', function() {
    // Animated taxi icon moving across the hero section
    const animateTaxi = () => {
        const taxiIcon = document.querySelector('.cab-animation');
        if (!taxiIcon) return;
        
        // Add a subtle floating animation (already handled in CSS)
        
        // Add road-like movement (optional depending on design)
        const randomMovement = () => {
            const randomX = Math.random() * 10 - 5; // Random value between -5 and 5
            taxiIcon.style.transform = `translateX(${randomX}px) translateY(0px)`;
            setTimeout(() => {
                taxiIcon.style.transform = 'translateX(0px) translateY(0px)';
            }, 500);
        };
        
        // Apply random movement effect periodically
        setInterval(randomMovement, 3000);
    };
    
    // Service card hover effects
    const setupServiceCards = () => {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add a subtle scale effect
                card.style.transform = 'translateY(-10px) scale(1.02)';
                
                // Find and animate the service icon
                const icon = card.querySelector('.service-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset transform
                card.style.transform = 'translateY(0px) scale(1)';
                
                // Reset icon
                const icon = card.querySelector('.service-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    };
    
    // Button hover effects
    const setupButtonEffects = () => {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-3px)';
                button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'none';
            });
        });
    };
    
    // Form field focus effects
    const setupFormEffects = () => {
        const formInputs = document.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    };
    
    // Initialize all animation functions
    const initAnimations = () => {
        animateTaxi();
        setupServiceCards();
        setupButtonEffects();
        setupFormEffects();
    };
    
    // Execute animations
    initAnimations();
});