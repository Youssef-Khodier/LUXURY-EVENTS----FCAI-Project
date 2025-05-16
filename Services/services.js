const images = document.querySelectorAll('.service img, .service-reverse img');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

images.forEach(img => {
  observer.observe(img);
});

// Navigation buttons functionality
document.getElementById('signIn').addEventListener('click', function() {
  window.location.href = '../contact us  log in sign up/contact us _ log in _sign up/log in .html';
});

document.getElementById('contactUs').addEventListener('click', function() {
  window.location.href = '../contact us  log in sign up/contact us _ log in _sign up/contact us .html';
});
