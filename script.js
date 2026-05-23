document.addEventListener('DOMContentLoaded', function() {

  window.navigateToSection = function(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  window.openModal = function(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
  };

  window.mobileNav = function(id) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.pcard').forEach(c => {
        c.style.display = (f === 'all' || c.dataset.type === f) ? '' : 'none';
      });
      document.querySelectorAll('.pcard.wide').forEach(c => {
        if (c.style.display !== 'none') c.style.gridColumn = 'span 2';
      });
    });
  });

  document.querySelectorAll('.design-modal').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) closeModal(m.id);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.design-modal.open').forEach(m => closeModal(m.id));
    }
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

});