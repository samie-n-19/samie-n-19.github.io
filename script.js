// DOM Elements
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const contactForm = document.getElementById('contactForm');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
// Close mobile menu when a link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
    });
});

// Image Carousel
function setupCarousel() {
    const images = document.querySelectorAll('.carousel-img');
    let idx = 0;
    function showSlide(i) {
        images.forEach((img, j) => img.classList.toggle('active', j === i));
    }
    setInterval(() => {
        idx = (idx + 1) % images.length;
        showSlide(idx);
    }, 3400); // Transition every 3.4 seconds
    showSlide(idx);
}
document.addEventListener('DOMContentLoaded', function() {
    setupCarousel();
});

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        // This is demo logic; replace with backend integration
        alert('Thanks for your message, ' + name + '! I will get back to you soon.');
        contactForm.reset();
    });
}
