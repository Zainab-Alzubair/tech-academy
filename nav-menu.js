const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLink = document.querySelectorAll('.nav-list-item');

navToggle.addEventListener('click', () => {
  const visibilty = primaryNav.getAttribute('data-visible');

  if (visibilty === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibilty === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

for (let i = 0; i < navLink.length; i += 1) {
  navLink[i].addEventListener('click', () => {
    const visibilty = primaryNav.getAttribute('data-visible');
    if (visibilty === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
}
