// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  if (!nav.style.display || nav.style.display === 'none') {
    nav.style.display = 'block';
    nav.style.background = 'rgba(11,14,42,0.98)';
    nav.style.position = 'absolute';
    nav.style.right = '16px';
    nav.style.top = '64px';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
  } else {
    nav.style.display = 'none';
  }
});

// Smooth scrolling for nav links + active link switching
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav
      if (window.innerWidth < 980 && nav) nav.style.display = 'none';
    }
  });
});

// highlight active nav on scroll
const sections = document.querySelectorAll('main section[id]');
function onScroll() {
  const scrollPos = window.scrollY + 110; // header offset
  let current = null;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos) current = sec;
  });
  if (current) {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// "View More" demo handlers for service cards
document.querySelectorAll('.view-more').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    alert('This would open a project modal or details page (demo).');
  });
});

// Contact form demo submit
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = 'Message sent. Thank you!';
    contactForm.reset();
    setTimeout(()=> formMsg.textContent = '', 4000);
  });
}
