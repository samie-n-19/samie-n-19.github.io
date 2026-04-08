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
// Image Carousel (hero background)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero .carousel-img');
    if (!slides.length) return;
  
    let idx = 0;
    const show = i => slides.forEach((img, j) => img.classList.toggle('active', j === i));
  
    show(idx);
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, 3400);
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
  
// Typing animation for hero text
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typingText) return; // Exit if element doesn't exist
    
    const phrases = [
      "Motion Planner Engineer",
      "Perception Enthusiast", 
      "ROS Developer",
      "Embedded Engineer"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Speed of typing
    let deleteSpeed = 50;  // Speed of deleting
    let pauseTime = 2000;  // Pause between phrases
    
    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        // Delete characters
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, 200); // Short pause before typing next phrase
          return;
        }
        setTimeout(typeEffect, deleteSpeed);
      } else {
        // Type characters
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeEffect, pauseTime); // Pause before deleting
          return;
        }
        setTimeout(typeEffect, typingSpeed);
      }
    }
    
    // Start the animation after a short delay
    setTimeout(typeEffect, 1000);
  });
  