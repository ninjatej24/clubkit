// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll function
function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Form submission handling (prevent default)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application submitted! (This is a demo)');
    });
});
