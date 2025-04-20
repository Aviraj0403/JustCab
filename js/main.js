// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Navigation toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the value, the faster the animation
    
    const runCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Calculate increment value
            const inc = target / speed;
            
            if (count < target) {
                // Increase the count and update the element
                counter.innerText = Math.ceil(count + inc);
                // Call the function again after a delay
                setTimeout(runCounter, 1);
            } else {
                // Ensure the final value is exactly the target
                counter.innerText = target;
            }
        });
    };
    
    // Start the counter animation when the about section enters the viewport
    const aboutSection = document.querySelector('.about-section');
    
    // Use Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // Form submission
    const enquiryForm = document.getElementById('enquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    const whatsappLink = document.getElementById('whatsappLink');
    const newEnquiryBtn = document.getElementById('newEnquiryBtn');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(enquiryForm);
            
            // Form validation
            const name = formData.get('name');
            const phone = formData.get('phone');
            const travelDate = formData.get('travel_date');
            const tripType = formData.get('trip_type');
            const message = formData.get('message');
            
            if (!name || !phone || !travelDate || !tripType) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Format message for WhatsApp without backend processing
            const whatsAppMessage = `*New Booking Enquiry From JustCab*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Travel Date:* ${travelDate}\n*Trip Type:* ${tripType}\n*Message:* ${message || 'N/A'}`;
            const encodedMessage = encodeURIComponent(whatsAppMessage);
            
            // Get admin phone (replace with your number)
            const adminPhone = "917290885949";  // Replace with your number with country code
            
            const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

            // Set link and auto open in new tab
            whatsappLink.href = whatsappUrl;
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            enquiryForm.style.display = 'none';
            formSuccess.classList.add('active');
        });
        
        // Reset form for new enquiry
        if (newEnquiryBtn) {
            newEnquiryBtn.addEventListener('click', function() {
                enquiryForm.reset();
                enquiryForm.style.display = 'block';
                formSuccess.classList.remove('active');
            });
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});
