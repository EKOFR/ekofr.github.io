document.addEventListener('DOMContentLoaded',function(){
  const button=document.querySelector('.menu-btn');
  const menu=document.querySelector('.navlinks');
  if(button&&menu){
    button.addEventListener('click',function(){
      const open=menu.classList.toggle('open');
      button.setAttribute('aria-expanded',open?'true':'false');
      button.textContent=open?'✕':'☰';
      button.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
    });
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');button.textContent='☰';button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Ouvrir le menu');});});
    document.addEventListener('click',function(e){if(menu.classList.contains('open')&&!menu.contains(e.target)&&!button.contains(e.target)){menu.classList.remove('open');button.textContent='☰';button.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.classList.remove('open');button.textContent='☰';button.setAttribute('aria-expanded','false');}});
  }
  const form=document.getElementById('quote-form');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Demande de devis - EKOFR');const body=encodeURIComponent('Nom : '+(d.get('nom')||'')+'\nTéléphone : '+(d.get('telephone')||'')+'\nEmail : '+(d.get('email')||'')+'\nProjet : '+(d.get('projet')||'')+'\nMessage : '+(d.get('message')||''));window.location.href='mailto:Contact.ekofr@gmail.com?subject='+subject+'&body='+body;});}
});
