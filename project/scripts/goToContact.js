// boton to contact us page
  document.getElementById('contactUs').addEventListener('click', function() {
    window.location.href = 'contactUs.html'; 
  });


// boton to scroll to author section
document.getElementById('learnMore').addEventListener('click', function() {
  scrollToSection('author');  
});

function scrollToSection(author) {
  const element = document.getElementById(author);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
