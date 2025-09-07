// ===============================
// Menu mobile
// ===============================
const menuMobile = () => {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => header.classList.toggle('show-nav'));
  links.forEach(link => link.addEventListener('click', () => header.classList.remove('show-nav')));
};
menuMobile();

// ===============================
// Portfolio - filtres
// ===============================
const tabsFilters = () => {
  const tabs = document.querySelectorAll('.portfolio--filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const filter = tab.dataset.filter;

      // Gestion de l'active
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Affichage des projets
      projets.forEach(projet => {
        const category = projet.dataset.category;
        projet.parentElement.classList.toggle('hide', filter !== 'all' && category !== filter);
      });
    });
  });
};
tabsFilters();

// ===============================
// Portfolio - modales
// ===============================
const showProjectDetails = () => {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => modals.forEach(modal => modal.classList.remove('show'));

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(link.dataset.id).classList.add('show');
    });
  });

  btns.forEach(btn => btn.addEventListener('click', hideModals));
};
showProjectDetails();

// ===============================
// Animations Intersection Observer
// ===============================
const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section:not(:first-child)');
  const skills = document.querySelectorAll('.skills .bar');

  // Initial state
  sections.forEach(section => section.style.opacity = 0);
  skills.forEach(skill => skill.style.width = '0');

  // Observer sections
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.opacity = 1;
    });
  }, { threshold: 0.2 });

  sections.forEach(section => sectionObserver.observe(section));

  // Observer skills
  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.width = entry.target.dataset.width + '%';
    });
  }, { threshold: 0.2 });

  skills.forEach(skill => skillsObserver.observe(skill));
};
observerIntersectionAnimation();
