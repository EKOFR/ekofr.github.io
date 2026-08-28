document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.navlinks');
  
  if (!btn || !nav) return;

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.toggle('open');
    
    if (nav.classList.contains('open')) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.right = '15px';
      nav.style.background = '#ffffff';
      nav.style.padding = '20px';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
      nav.style.zIndex = '1000';
      nav.style.gap = '15px';
    } else {
      nav.style.display = '';
    }
  });

  // Fermer si on clique ailleurs
  document.addEventListener('click', function() {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = '';
    }
  });
});
