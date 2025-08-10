// botton 

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const navMenu = document.getElementById('navMenu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
  });

  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuBtn.textContent = '☰';
    });
  });
});

