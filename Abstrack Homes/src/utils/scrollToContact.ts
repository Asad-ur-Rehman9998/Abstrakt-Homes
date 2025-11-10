export const scrollToContact = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  // If we're not on the home page, navigate there first
  if (window.location.pathname !== '/') {
    window.location.href = '/#contact';
    return;
  }

  // Find the contact section
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};