// Main JavaScript file
console.log('UIU Events - Express App Loaded');

// Add active class to current nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.color = 'var(--color-text)';
      link.style.fontWeight = '600';
    }
  });
});
