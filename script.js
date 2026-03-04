// Navigation Active Link Update on Scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            const targetPosition = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(61, 90, 95, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(61, 90, 95, 0.1)';
    }
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.hobby-card, .project-card, .highlight-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add initial animation to page elements
window.addEventListener('load', () => {
    // Trigger initial section animations
    document.querySelectorAll('.hobby-card, .project-card, .highlight-item').forEach((card, index) => {
        setTimeout(() => {
            if (card.getBoundingClientRect().top < window.innerHeight) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        }, index * 100);
    });
});

// Responsive Menu Toggle (optional - for mobile hamburger menu)
// Can be expanded if needed for mobile-specific navigation

