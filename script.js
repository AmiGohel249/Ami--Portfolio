// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
//     alert('Thank you for your message! I will get back to you soon.');
//     // Here you can add code to send the form data using AJAX if needed
// });
var typed = new Typed("#typed-text",{
    strings:["UX/UI designer , Frontend Devloper and Web Devloper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    
});

// Get all links in the navbar
const links = document.querySelectorAll('.nav-links a');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Get the ID of the section to scroll to
    const sectionId = link.getAttribute('data-section');

    // Get the section element
    const section = document.getElementById(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const readMoreButtons = document.querySelectorAll('.read');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const additionalInfo = button.nextElementSibling;
    additionalInfo.style.display = additionalInfo.style.display === 'block' ? 'none' : 'block';
  });
});