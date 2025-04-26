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
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal animation
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        // For demo purposes, we'll just log it and show a success message
        console.log('Form submission:', { name, email, subject, message });
        
        // Reset form fields
        contactForm.reset();
        
        // Show success message (you can create a better UI for this)
        alert('Thanks for your message! I will get back to you soon.');
    });
}

// Projects filter functionality (can be expanded)
function setupProjectFilters() {
    // This is a placeholder for potential project filtering functionality
    // You could add category buttons and filter the projects based on them
    console.log('Project filtering functionality ready to be implemented');
}

// TypeWriter effect for hero section
function setupTypeWriter() {
    const textElement = document.querySelector('.hero h2');
    if (!textElement) return;
    
    const originalText = textElement.textContent;
    const typingSpeed = 100; // milliseconds
    
    function typeWriter(text, i, callback) {
        if (i < text.length) {
            textElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            
            setTimeout(function() {
                typeWriter(text, i + 1, callback);
            }, typingSpeed);
        } else {
            setTimeout(callback, 1000);
        }
    }
    
    function startTypeWriter() {
        textElement.textContent = '';
        typeWriter(originalText, 0, function() {
            setTimeout(startTypeWriter, 3000);
        });
    }
    
    // Uncomment to enable typewriter effect
    // startTypeWriter();
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    setupProjectFilters();
    setupTypeWriter();
    
    // Add active class to current section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
