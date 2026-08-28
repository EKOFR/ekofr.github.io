document.addEventListener('DOMContentLoaded', () => {
  const bouton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav-links');
  if (bouton && navigation) {
    bouton.addEventListener('click', () => {
      navigation.classList.toggle('ouvrir');
      navigation.classList.toggle('active');
    });
  }
});
