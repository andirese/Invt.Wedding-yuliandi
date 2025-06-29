// Musik dan buka undangan
const bukaUndangan = document.getElementById('bukaUndangan');
const opening = document.getElementById('opening');
const music = document.getElementById('music');

bukaUndangan.addEventListener('click', () => {
  opening.style.display = 'none';
  music.play();
  window.location.hash = '#home';
});

// Bottom navigation active state
const navLinks = document.querySelectorAll('.nav-btn');

window.addEventListener('hashchange', () => {
  const current = window.location.hash;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
